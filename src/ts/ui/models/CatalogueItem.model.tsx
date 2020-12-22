export default class CatalogueItemModel {
    title: string;
    description: string;
    thumbnailSrc: string;
    filterTags: string[];
    releaseDate: Date;

    constructor(title: string, description: string, thumbnailSrc: string, filterTags: string[], releaseDate: Date) {
        this.title = title;
        this.description = description;
        this.thumbnailSrc = thumbnailSrc;
        this.filterTags = filterTags;
        this.releaseDate = releaseDate;
    }
}

export { }