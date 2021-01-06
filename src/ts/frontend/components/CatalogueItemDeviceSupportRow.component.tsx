import React from 'react';

import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface CatalogueItemDeviceSupportRowComponentProps {
    showAsChips?: boolean;
    itemTags: string[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        defaultCatalogueItemDeviceRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    }));

const appDeviceDescriptorIcons = new Map([
    ['Android', <AndroidIcon />],
    ['iOS', <AppleIcon />],
    ['PC', <DesktopWindowsIcon />],
    ['Web', <WebIcon />],
    ['API', <CodeIcon />]
]);

export default function CatalogueItemDeviceSupportRowComponent(props: CatalogueItemDeviceSupportRowComponentProps) {
    const classes = useStyles();

    const createCatalogueItemDeviceRow = (tags: string[]) => {
        let rowItems = [];
        for (let tag of tags) {
            if (appDeviceDescriptorIcons.has(tag)) {
                let icon = appDeviceDescriptorIcons.get(tag);
                if (props.showAsChips) {
                    rowItems.push(<Chip icon={icon} label={tag} size="small" />)
                } else {
                    rowItems.push(icon);
                }
            }
        }

        return (<Box className={classes.defaultCatalogueItemDeviceRow}>
            {rowItems}
        </Box>);
    }

    return createCatalogueItemDeviceRow(props.itemTags);
}