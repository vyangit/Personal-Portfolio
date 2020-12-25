import React from 'react';
import CatalogueItemModel from '../../models/CatalogueItem.model'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

interface CatalogueGridViewComponentProps {
    items: Array<CatalogueItemModel>
}

export default function CatalogueGridViewComponent(props: CatalogueGridViewComponentProps) {
    const renderCatalogueItems = () => {
        let catalogueListItems = [];
        for (let i= 0; i < props.items.length; i++) {
            let item: CatalogueItemModel = props.items[i];
            catalogueListItems.push(
            <GridListTile key={item.title}>
                <img src={item.thumbnailSrc} alt={item.title}/>
                <GridListTileBar
                    title={item.title}
                    subtitle={item.description}/>
            </GridListTile>);
        }
        return catalogueListItems.length == 0 ? null : catalogueListItems
    }
    
    return (
    <GridList cellHeight={180}>
        {renderCatalogueItems()}
    </GridList>);
}