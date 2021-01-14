import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const portfolioSplash = '/assets/png/portfolio_splash_light.png';
const portfolioSplashDark = '/assets/png/portfolio_splash_dark.png';

interface HomePageProps {
    isDarkModeOn: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        greeting: {
            textTransform: 'uppercase',
            fontWeight: 800,
        },
        intro: {
            fontWeight: 'bold',
            marginTop: '0.5rem',
            marginBottom: '0.5rem'
        },
        gist: {
            width: '30rem',
            maxWidth: '70vw'
        },
        salutationsWrapper: {
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            width: "40rem",
            maxWidth: "100%",
            zIndex: 2
        },
        salutations: {
            margin: 'auto',
            [theme.breakpoints.down(850)]: {
                margin: 'auto',
                marginBottom: '25%'
            }
        },
        portrait: {
            maxWidth: '84%',
            maxHeight: '84%',
            position: 'absolute',
            top: '13%',
            right: '7%',
            zIndex: 1
        }
    }));

export default function HomePage(props: HomePageProps) {
    const classes = useStyles()

    return (
        <Container fixed>
            <Box className={classes.salutationsWrapper}>
                <Box className={classes.salutations}>
                    <Box display="flex" alignItems="center">
                        <Typography className={classes.greeting} variant="h6"><b>―</b> Hello</Typography>
                    </Box>
                    <Typography className={classes.intro} variant="h4" align="left">
                        I'm Victor Yan
                        </Typography>
                    <Typography className={classes.gist} variant="subtitle1" align="left">
                        A tech enthusiast and software developer located in Canada, looking for work across the globe and looking to share his own.
                        </Typography>
                </Box>
            </Box>
            <img src={props.isDarkModeOn ? portfolioSplashDark : portfolioSplash} className={classes.portrait} alt="me" />
        </Container>
    );
}

