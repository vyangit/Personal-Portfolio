import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import SignatureLogo from '../../../assets/logo.svg';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget)
    } 

    const handleMenuClose = () => {
        setMenuAnchorEl(null)
    }

    const handleMenuItemClick = (val: string) => {
        props.onMenuItemClick(val)
    } 

    const renderMenuItems = () => {
        let menuItemElements = [];
        for (let item of props.menuItems) {
            menuItemElements.push(
                <MenuItem onClick={() => handleMenuItemClick(item)}>{item}</MenuItem>
            )
        
        }

        return menuItemElements;
    }


    return (<div>
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid container item xs={2}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuButtonClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            keepMounted
                            open={Boolean(menuAnchorEl)}
                            onClose={handleMenuClose}>
                                {renderMenuItems()}
                        </Menu>
                    </Grid>
                    <Grid container item xs={8}>
                        <img src={SignatureLogo} className={navBarClasses.signatureLogo} height="60" alt="Signature Logo"></img>
                    </Grid>
                    <Grid container item xs={2}>
                        <Button color="inherit" className={navBarClasses.langBtn}>en-CA</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>);
}
