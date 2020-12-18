import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        margin: '4px'
    }
});

export default function FooterBarComponent() {
    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" margin="2vw">
            <Box>
                <IconButton size="small" className={classes.icon} href="https://www.linkedin.com/in/victorkyan/">
                    <LinkedinIcon color="primary"/>
                </IconButton>
                <IconButton size="small" className={classes.icon} href="https://github.com/vyangit">
                    <GithubIcon color="primary"/>
                </IconButton>
            </Box>
            <Box>
                Copyright &copy; {new Date().getUTCFullYear()}
            </Box>
        </Box>
    )
}