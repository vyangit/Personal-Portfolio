import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'

class NavBarComponent extends Component {
    render() {
        return <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    }
}

export default NavBarComponent