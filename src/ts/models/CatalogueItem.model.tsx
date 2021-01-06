export default class CatalogueItemModel {
    title: string;
    description: string;
    thumbnailSrc: string;
    filterTags: string[];
    releaseDate: Date;
    srcRepoLink: string;
    distributionsLinks: string[][];

    constructor(
        title: string, 
        description: string, 
        thumbnailSrc: string, 
        filterTags: string[], 
        releaseDate: Date, 
        srcRepoLink: string,
        distributionsLinks: string[][] 
        ) {
        this.title = title;
        this.description = description;
        this.thumbnailSrc = thumbnailSrc;
        this.filterTags = filterTags;
        this.releaseDate = releaseDate;
        this.srcRepoLink = srcRepoLink;
        this.distributionsLinks = distributionsLinks
    }
}