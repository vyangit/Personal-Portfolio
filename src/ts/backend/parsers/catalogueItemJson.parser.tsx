import CatalogueItemModel from '../../models/CatalogueItem.model';

export default class CatalogueItemJsonParser {
    public static parseJson(catalogueJson: string): Array<CatalogueItemModel> {
        var catalogueMetaData = JSON.parse(catalogueJson);
        var results = new Array<CatalogueItemModel>();
        if (catalogueMetaData.hasOwnProperty('catalogue')) {
            //TODO: Implement
        }

        return results;
    }
}

export {}