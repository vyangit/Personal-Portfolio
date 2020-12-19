import React, {useState} from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';

import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles ({
    selector: {
        minWidth: '10rem'
    },
    multipleSelector: {
        minWidth: '12rem'
    }
});


export default function CataloguePage() {
    const classes = useStyles();
    const [searchPhrase, setSearchPhrase] = useState('');
    const [catalogueViewMode, setCatalogueViewMode] = useState('');
    const [sortByMode, setSortByMode] = useState('');
    const [filterByTags, setFilterByTags] = useState([]);
    const filterOptions: string[] = [];

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

    return (
    <Box display="flex" 
        flexDirection="column"
        flexGrow={1}
        alignSelf="flex-start"
        maxWidth="100vw"
        padding="2rem">
    
        <Typography variant="h4">
            <Box fontWeight='fontWeightBold'>App Catalogue</Box>
        </Typography>

        <Box display="flex"
            flexDirection="row"
            flexGrow={1}
            justifyContent="space-between"
            marginTop="0.3rem">

            <FormControl className={classes.selector}>
                <InputLabel>View as:</InputLabel>
                <Select value={catalogueViewMode} onChange={handleCatalogueViewChange}>
                    <MenuItem>Placeholder</MenuItem>
                </Select>
            </FormControl>
            
            <FormControl className={classes.selector}>
                <InputLabel>Sort by:</InputLabel>
                <Select value={sortByMode} onChange={handleSortByChange}>
                    <MenuItem>Placeholder</MenuItem>
                </Select>
            </FormControl>

            <Autocomplete
                className={classes.multipleSelector}
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

            <TextField 
            label="Keywords" 
            onChange={(event) => {setSearchPhrase(event.target.value)}}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                )
            }}/>
        </Box>
    </Box>
    );
}

