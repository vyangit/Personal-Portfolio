import React from 'react';
import NLink from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import DarkModeOnIcon from '@material-ui/icons/Brightness5';
import DarkModeOffIcon from '@material-ui/icons/Brightness7';
import { makeStyles } from '@material-ui/core/styles';

const SignatureLogoLight = '/assets/svg/v_light.svg';
const SignatureLogoDark = '/assets/svg/v_dark.svg';

interface NavBarProps {
    onMenuItemClick: Function,
    currMenuItem: string,
    menuItems: Array<Array<string>>,
    isDarkModeOn?: boolean;
    toggleDarkMode?: Function
}

const useStyles = makeStyles({
    signatureLogo: {
        margin: 'auto'
    },
    rightButton: {
        marginLeft: '4px'
    },
    noUnderline: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

export default function NavBarComponent(props: NavBarProps) {
    const navBarClasses = useStyles(props);
    const SignatureLogo = props.isDarkModeOn ? SignatureLogoDark : SignatureLogoLight;
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setMenuAnchorEl(null)
    }

    const handleMenuItemClick = (val: string) => {
        props.onMenuItemClick(val)
        handleMenuClose()
    }

    const handleDarkModeToggle = () => {
        if (props.toggleDarkMode !== undefined) {
            props.toggleDarkMode(!props.isDarkModeOn);
        }
    }

    const renderMenuItems = () => {
        let menuItemElements = [];
        let itemProps = props.menuItems;

        for (let item of itemProps) {
            let title = item[0];
            let hrefValue = item[1];
            menuItemElements.push(
                <MenuItem onClick={() => handleMenuItemClick(title)} selected={title == props.currMenuItem}>
                    <NLink href={hrefValue}>
                        <a className={navBarClasses.noUnderline}>
                            {title}
                        </a>
                    </NLink>
                </MenuItem>
            )
        }

        return menuItemElements;
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid container item xs={2}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuButtonClick}>
                            <MenuIcon />
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
                        <img src={SignatureLogo} className={navBarClasses.signatureLogo} height="50px" alt="Signature Logo"></img>
                    </Grid>
                    <Grid container item xs={2} justify='flex-end'>
                        <IconButton color="inherit" className={navBarClasses.rightButton} onClick={handleDarkModeToggle}>
                            {props.isDarkModeOn ? <DarkModeOnIcon /> : <DarkModeOffIcon />}
                        </IconButton>
                        {/* <Button color="inherit" className={navBarClasses.rightButton}>en-CA</Button> */}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
