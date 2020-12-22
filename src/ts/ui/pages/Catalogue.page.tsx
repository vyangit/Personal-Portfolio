import React, {useState, useEffect} from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Fab from '@material-ui/core/Fab';

import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        filterFab: {
            position: 'absolute',
            top: 'auto',
            left: 'auto',
            bottom: theme.spacing(6),
            right: theme.spacing(3)
        }
}));

export default function CataloguePage() {
    const classes = useStyles();
    
    const [searchPhrase, setSearchPhrase] = useState('');
    const [catalogueViewMode, setCatalogueViewMode] = useState('');
    const [sortByMode, setSortByMode] = useState('');
    const [filterByTags, setFilterByTags] = useState([]);
    
    /**
     * Determines if the screen is less than the threshold width.
     * 
     * @returns True if screen width is less than 800 dp, else false
     */
    const isScreenSmall = (): boolean => {
        return window.screen.width < 800
    }

    const [showFilterAsFabFlag, setShowFilterAsFabFlag] = useState(isScreenSmall());
    
    const filterOptions: string[] = [];

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    const handleResize = () => {
        setShowFilterAsFabFlag(isScreenSmall());
    }

    const handleSearch = () => {
        //TODO
        console.log(searchPhrase);
    }

    const handleCatalogueViewChange = (event: React.ChangeEvent<{value: unknown}>) => {
        setCatalogueViewMode(event.target.value as string)
    }

    const handleSortByChange = (event: React.ChangeEvent<{value: unknown}>) => {
        setSortByMode(event.target.value as string)
    }

    const renderFilter = () => {
        if (!showFilterAsFabFlag) {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>View as:</InputLabel>
                        <Select value={catalogueViewMode} onChange={handleCatalogueViewChange}>
                            <MenuItem>Placeholder</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>Sort by:</InputLabel>
                        <Select value={sortByMode} onChange={handleSortByChange}>
                            <MenuItem>Placeholder</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                <Grid item xs={3}>
                    <Autocomplete
                        multiple
                        options={filterOptions}
                        getOptionLabel={(option) => option}
                        defaultValue={[]}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            variant="standard"
                            label="Filter by:"
                            placeholder=""
                            />
                        )}
                    />
                </Grid>
            </React.Fragment>
            );
        } else {
            return null
        }
    }

    const renderFilterAsFab = () => {
        if (showFilterAsFabFlag) {
            return (
                <Fab color="primary" className={classes.filterFab}>
                    <FilterListIcon/>
                </Fab>
            )
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
        <Box 
            display="flex" 
            flexDirection="column"
            flexGrow={1}
            padding="7vw"
            maxWidth="100vw">
        
            <Typography gutterBottom variant="h4">
                <Box fontWeight='fontWeightBold'>App Catalogue</Box>
            </Typography>

            <Grid
                container
                spacing={2}
                justify="space-between">
                
                {renderFilter()}
                <Grid item xs={showFilterAsFabFlag ? 12 : 3}>
                    <TextField 
                        fullWidth
                        label="Keywords" 
                        onChange={(event) => {setSearchPhrase(event.target.value)}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSearch}>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>)}}
                    />
                </Grid>
            </Grid>
            
        </Box>
            {renderFilterAsFab()}
        </React.Fragment>
    );
}

