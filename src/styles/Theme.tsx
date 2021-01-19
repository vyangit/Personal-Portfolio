import { blue, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: blue,
        secondary: {
            main: blue[700]
        },
        background: {
            default: '#EAEFF2'
        }
    }
});

const DarkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: red[700]
        }, secondary: {
            main: red[900]
        },
        background: {
            default: 'black'
        }
    }
});

export {Theme, DarkTheme}