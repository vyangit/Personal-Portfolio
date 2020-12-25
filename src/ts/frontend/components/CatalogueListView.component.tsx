import React from 'react';
import CatalogueItemModel from '../../models/CatalogueItem.model'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'

interface CatalogueListViewComponentProps {
    items: Array<CatalogueItemModel>
}

export default function CatalogueListViewComponent(props: CatalogueListViewComponentProps) {
    const renderCatalogueItems = () => {
        let catalogueListItems = [];
        for (let i= 0; i < props.items.length; i++) {
            let item: CatalogueItemModel = props.items[i];
            catalogueListItems.push(
            <React.Fragment>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar variant="square" alt={item.title} src={item.thumbnailSrc}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.title}
                        secondary={item.description}/>
                </ListItem>
                {i != props.items.length-1 ? <Divider variant="middle"/>: null}
            </React.Fragment>);
        }
        return catalogueListItems.length == 0 ? null : catalogueListItems
    }
    
    return (
    <List>
        {renderCatalogueItems()}
    </List>);
}