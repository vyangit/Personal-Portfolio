import React from 'react';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        margin: '4px'
    }
});

export default function FooterBarComponent() {
    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="space-between" margin="2vw">
            <Box>
                <LinkedinIcon className={classes.icon}/>
                <GithubIcon className={classes.icon}/>
            </Box>
            <Box>
                Copyright {new Date().getUTCFullYear()}
            </Box>
        </Box>
    )
}