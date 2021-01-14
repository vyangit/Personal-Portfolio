// import CatalogueItemsJson from '@data/catalogue_items.json';
import CatalogueItemModel from '@models/CatalogueItem.model';
import CatalogueItemJsonParser from '@parsers/CatalogueItemJson.parser';

export default class CatalogueItemRepository {
    public static getAllCatalogueItems(): Array<CatalogueItemModel> {
        // return CatalogueItemJsonParser.parseJson(JSON.stringify(CatalogueItemsJson));
        return []
    }
}