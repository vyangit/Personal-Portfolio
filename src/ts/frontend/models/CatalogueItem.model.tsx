export default class CatalogueItemModel {
    title: string;
    description: string;
    thumbnailSrc: string;
    filterTags: string[];
    releaseDate: Date;
    releaseLink: string;
    repoLink: string;

    constructor(
        title: string, 
        description: string, 
        thumbnailSrc: string, 
        filterTags: string[], 
        releaseDate: Date, 
        releaseLink: string, 
        repoLink: string
        ) {
        this.title = title;
        this.description = description;
        this.thumbnailSrc = thumbnailSrc;
        this.filterTags = filterTags;
        this.releaseDate = releaseDate;
        this.releaseLink = releaseLink;
        this.repoLink = repoLink;
    }
}

export { }