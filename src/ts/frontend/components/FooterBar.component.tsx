import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: theme.spacing(3),
        marginTop: 0
    },
    icon: {
        margin: '4px',
    }
}));

export default function FooterBarComponent() {
    const classes = useStyles();

    return (
        <Box className={classes.footerContainer}>
            <Box>
                <IconButton size="small" className={classes.icon} href="https://www.linkedin.com/in/victorkyan/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon color="primary" />
                </IconButton>
                <IconButton size="small" className={classes.icon} href="https://github.com/vyangit" target="_blank" rel="noopener noreferrer">
                    <GithubIcon color="primary" />
                </IconButton>
            </Box>
            <Box>
                Copyright &copy; {new Date().getUTCFullYear()}
            </Box>
        </Box>
    )
}