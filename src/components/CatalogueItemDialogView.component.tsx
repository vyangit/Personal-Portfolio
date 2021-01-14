import React from 'react';
import CatalogueItemModel from '@models/CatalogueItem.model';
import CatalogueItemDeviceSupportRowComponent from './CatalogueItemDeviceSupportRow.component';
import CatalogueItemDistributionChannelRow from './CatalogueItemDistributionChannelRow.component';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface CatalogueItemDialogViewComponentProps {
    isOpen: boolean;
    catalogueItem: CatalogueItemModel;
    handleClose?: Function;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    bottomGutter: {
        marginBottom: theme.spacing(1)
    },
    thumbnail: {
        height: '100%',
        width: '100%',
    },
    thumbnailHorizontal: {
        display: 'flex',
        marginRight: theme.spacing(2)
    },
    thumbnailVertical: {
        display: 'flex',
        alignSelf: 'center',
        marginBottom: theme.spacing(2)
    },
    thumbnailContainerSmall: {
        width: '50vw',
        height: '50vw',
        alignSelf: 'center'
    },
    thumbnailContainer: {
        width: '12rem',
        height: '12rem',
        maxWidth: '15vw',
        maxHeight: '15vw',
    }
}));


/**
 * Determines if the screen is less than the threshold width.
 * 
 * @returns True if screen width is less than 800 dp, else false
 */
const isScreenSmall = (): boolean => {
    return window.screen.width < 750
}

export default function CatalogueItemDialogViewComponent(props: CatalogueItemDialogViewComponentProps) {
    const classes = useStyles();
    const item = props.catalogueItem;

    const handleClose = () => {
        if (props.handleClose !== undefined) {
            props.handleClose()
        }
    }

    const renderAppThumbnail = () => {
        return (
            <Box className={isScreenSmall() ? classes.thumbnailVertical : classes.thumbnailHorizontal}>
                <Box className={isScreenSmall() ? classes.thumbnailContainerSmall : classes.thumbnailContainer}>
                    <Avatar variant="rounded" className={classes.thumbnail} src={item.thumbnailSrc}>
                        {item.title[0].toLocaleUpperCase()}
                    </Avatar>
                </Box>
            </Box>
        );
    }

    const renderAvailableOnRow = () => {
        return (
            <Box display="flex" flexDirection="column" className={classes.bottomGutter}>
                <Typography variant="subtitle1">Available for:</Typography>
                <CatalogueItemDeviceSupportRowComponent showAsChips itemTags={item.filterTags} />
            </Box>
        );
    }

    const renderCategoryChips = () => {
        let categoryChips = [];
        for (let category of item.filterTags) {
            categoryChips.push(<Chip size="small" label={category} />);
        }

        return (
            <Box display="flex" flexDirection="column" flexWrap="wrap" className={classes.bottomGutter}>
                <Typography variant="subtitle1">Categories:</Typography>
                <Box>{categoryChips}</Box>
            </Box>)
    }

    const renderDescription = () => {
        return (
            <Box display="flex" flexDirection="column">
                <Typography variant="subtitle1">Description:</Typography>
                <DialogContentText>
                    {item.description}
                </DialogContentText>
            </Box>
        );
    }

    const renderDistributionChannels = () => {
        return (
            <Box display="flex" flexDirection="column">
                <Typography variant="subtitle1">Distributions:</Typography>
                <CatalogueItemDistributionChannelRow distributionLinks={item.distributionLinks} />
            </Box>
        );
    }

    return (
        <Dialog
            open={props.isOpen}
            onClose={handleClose}
            maxWidth="md"
            scroll="paper">
            <DialogTitle id="responsive-dialog-title">{item.title}</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection={isScreenSmall() ? "column" : "row"} justifyContent="space-between">
                    {renderAppThumbnail()}
                    <Box display="flex" flexDirection="column">
                        {renderAvailableOnRow()}
                        {renderCategoryChips()}
                        {renderDescription()}
                        {renderDistributionChannels()}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions></DialogActions>
        </Dialog>
    )
}