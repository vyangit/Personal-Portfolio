import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import GithubIcon from '@material-ui/icons/GitHub';
import distributionChannels from '../../constants/DistributionChannels.constants';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface CatalogueItemDistributionChannelRowProps {
    distributionLinks: string[][];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    genericBadgeButtonWrapper: {
        width: '120px',
        height: '40px',
    },
}));

export default function CatalogueItemDistributionChannelRow(props: CatalogueItemDistributionChannelRowProps) {
    const classes = useStyles();
    const channels = props.distributionLinks;

    const generateGenericBadge = (storeName: string, storeLink: string) => {
        let badgeIcon = null;
        switch (storeName) {
            case 'Github': badgeIcon = <GithubIcon />
        }

        return (
            <Link href={storeLink} rel="noreferrer" target="_blank">
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.genericBadgeButtonWrapper}
                    startIcon={badgeIcon}>
                    {storeName}
                </Button>
            </Link>
        );
    }

    const generateSpecificBadge = (storeName: string, storeLink: string) => {
        // TODO: Implement when needed
        return (<div>Specific badge</div>);
    }

    const renderBadgesRow = () => {
        let badgeEmbeds = [];
        let specificStores = distributionChannels.get('specific');
        let genericStores = distributionChannels.get('generic');
        for (let channel of channels) {
            let hostName = channel[0];
            let hostLink = channel[1];

            if (specificStores?.includes(hostName)) {
                badgeEmbeds.push(generateSpecificBadge(hostName, hostLink));
            } else if (genericStores?.includes(hostName)) {
                badgeEmbeds.push(generateGenericBadge(hostName, hostLink));
            }
        }

        return badgeEmbeds;
    }

    return (
        <Box display="flex">
            {renderBadgesRow()}
        </Box>
    )
}