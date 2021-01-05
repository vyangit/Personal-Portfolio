import React from 'react';

import Box from '@material-ui/core/Box';

import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface CatalogueItemDeviceSupportRowComponentProps {
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
    ['Android', <AndroidIcon/>],
    ['iOS', <AppleIcon/>],
    ['PC', <DesktopWindowsIcon/>],
    ['Web', <WebIcon/>],
    ['API', <CodeIcon/>]
]);

export default function CatalogueItemDeviceSupportRowComponent(props: CatalogueItemDeviceSupportRowComponentProps) {
    const classes = useStyles();

    const createCatalogueItemDeviceRow = (tags: string[]) => {
        let defaultIcons = [];
        for (let tag of tags) {
            if (appDeviceDescriptorIcons.has(tag)) {
                let icon = appDeviceDescriptorIcons.get(tag);
                defaultIcons.push(icon);
            }
        }

        return (<Box className={classes.defaultCatalogueItemDeviceRow}>
            {defaultIcons}
        </Box>);
    }

    return createCatalogueItemDeviceRow(props.itemTags);
}