import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

import SignatureLogo from '../../../assets/logo.svg'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

interface Props {
    onMenuItemClick: Function,
    currMenuItem: string,
    menuItems: string[]
}

const useStyles = makeStyles({
    signatureLogo: {
        margin: 'auto'
    },
    langBtn: {
        marginLeft: 'auto'
    }
});

export default function NavBarComponent(props: Props) {
    const navBarClasses = useStyles(props);

    return (<div>
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid container item xs={1}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                    <Grid container item xs={10}>
                        <img src={SignatureLogo} className={navBarClasses.signatureLogo} height="60" alt="Signature Logo"></img>
                    </Grid>
                    <Grid container item xs={1}>
                        <Button color="inherit" className={navBarClasses.langBtn}>en-CA</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>);
}
