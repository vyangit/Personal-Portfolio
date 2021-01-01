import React, {useState} from 'react';
import CatalogueItemModel from '../../models/CatalogueItem.model';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';

interface CatalogueItemDialogViewComponentProps {
    isOpen: boolean;
    selectedCatalogueItem: CatalogueItemModel | null;
    handleClose ?: Function;
}

export default function CatalogueItemDialogViewComponent(props: CatalogueItemDialogViewComponentProps) {
    const handleClose = () => {
        if (props.handleClose != undefined) {
            props.handleClose()
        }

    }

    return (
        <Dialog
            open={props.isOpen}
            onClose={handleClose}>
            <DialogTitle id="responsive-dialog-title">A catalogue item</DialogTitle>
            <DialogContent>
            <DialogContentText>
                CatalogueItemDialogView
            </DialogContentText>
            </DialogContent>
            <DialogActions></DialogActions>
        </Dialog>
    )
}