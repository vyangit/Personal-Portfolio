import CatalogueItemModel from '../models/CatalogueItem.model';

export default class CatalogueItemJsonParser {
    public static parseJson(catalogueJson: string): Array<CatalogueItemModel> {
        var catalogueMetaData = JSON.parse(catalogueJson);
        var results = new Array<CatalogueItemModel>();
        if (catalogueMetaData.hasOwnProperty('catalogue')) {
            catalogueMetaData['catalogue'].forEach((entry: any) => {
                results.push(new CatalogueItemModel(
                    entry.title as string,
                    entry.description as string,
                    entry.thumbnailSrc as string,
                    entry.filterTags as string[],
                    new Date(entry.releaseDate as string),
                    entry.srcRepoLink as string,
                    entry.distributionLinks as string[][]
                ));
            });
        }

        return results;
    }
}

export { }