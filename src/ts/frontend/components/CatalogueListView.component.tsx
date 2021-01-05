import React from 'react';
import CatalogueItemModel from '../../models/CatalogueItem.model'

import CatalogueItemDeviceSupportRowComponent from './CatalogueItemDeviceSupportRow.component';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface CatalogueListViewComponentProps {
    items: Array<CatalogueItemModel>
    onItemSelected?: Function;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        endAlign: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignSelf: 'center'
        }
}));

export default function CatalogueListViewComponent(props: CatalogueListViewComponentProps) {
    const classes = useStyles();

    const handleOnItemSelected = (item: CatalogueItemModel) => {
        if (props.onItemSelected !== undefined) {
            props.onItemSelected(item);
        }
    }

    const renderCatalogueItems = () => {
        let catalogueListItems = [];
        for (let i = 0; i < props.items.length; i++) {
            let item: CatalogueItemModel = props.items[i];
            catalogueListItems.push(
                <React.Fragment>
                    <ListItem alignItems="flex-start" onClick={() => handleOnItemSelected(item)}>
                        <ListItemAvatar>
                            <Avatar variant="square" src={item.thumbnailSrc}>
                                {item.title[0].toLocaleUpperCase()}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.title}
                            secondary={item.description} />
                        <Box className={classes.endAlign}>
                            <CatalogueItemDeviceSupportRowComponent itemTags={item.filterTags}/>
                        </Box>
                    </ListItem>
                    {i !== props.items.length - 1 ? <Divider variant="middle" /> : null}
                </React.Fragment>);
        }
        return catalogueListItems.length === 0 ? null : catalogueListItems
    }

    return (
        <List>
            {renderCatalogueItems()}
        </List>);
}