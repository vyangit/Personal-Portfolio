import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    greeting: {
        textTransform: 'uppercase',
        fontWeight: 800
    },
    intro: {
        fontWeight: 'bold',
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
    },
    greetingLineIn: {
        backgroundColor:'black',
        height:'0.25rem',
        width: '2rem',
        marginRight: '8px'
    },
    gist: {
        width: '30rem',
        maxWidth: '80vw'
    }
})

export default function HomePage() {
    const classes = useStyles()

    return (
    <Box display="flex" flexDirection="row" flexGrow={1} alignItems="center">
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="flex-start" 
                width="60rem" 
                maxWidth="100vw"
                padding="2rem" 
                margin="auto">
                <Box display="flex" alignItems="center">            
                    <hr className={classes.greetingLineIn}/>
                    <Typography className={classes.greeting} variant="h6">Hello</Typography>
                </Box>
                <Typography className={classes.intro} variant="h4" align="left">
                    I'm Victor Yan
                </Typography>
                <Typography className={classes.gist} variant="subtitle1" align="left">
                    A tech enthusiast and software developer located in Canada, looking for work across the globe and looking to share his own.
                </Typography>
            </Box>
    </Box>)
}

