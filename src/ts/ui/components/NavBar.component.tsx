import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

import SignatureLogo from '../../../assets/logo.svg'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        signatureLogo: {
            flexGrow: 1,
        }
    })
)

interface Props {
    onMenuItemClick: Function,
    currMenuItem: string,
    menuItems: string[]
}

export default function NavBarComponent(props: Props) {
    const navBarStyles = useStyles()
    
    return (<div>
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <div className={navBarStyles.signatureLogo}>
                    <img src={SignatureLogo} height="60"></img>
                </div>
                <Button color="inherit">en-CA</Button>
            </Toolbar>
        </AppBar>
    </div>);
}
