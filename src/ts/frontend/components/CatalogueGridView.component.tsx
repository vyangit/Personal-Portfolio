import React from 'react';
import CatalogueItemModel from '../../models/CatalogueItem.model'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import {makeStyles} from '@material-ui/core/styles'

interface CatalogueGridViewComponentProps {
    items: Array<CatalogueItemModel>
}

const gridItemWidth = 300;
    
const determineNumCols = () => {
    let cols = Math.floor(window.screen.width/gridItemWidth);
    if (cols < 1) cols = 1;
    return cols;
}

const useStyles = makeStyles({
    gridList: {
        flexGrow: 1,
        flexWrap: 'wrap'
    }
})

export default function CatalogueGridViewComponent(props: CatalogueGridViewComponentProps) {
    const classes = useStyles();

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
    <GridList cellHeight={200} cols={(determineNumCols())} className={classes.gridList}>
        {renderCatalogueItems()}
    </GridList>);
}