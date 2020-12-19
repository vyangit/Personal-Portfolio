import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Typography } from '@material-ui/core';

export default function CataloguePage() {
    const [searchPhrase, setSearchPhrase] = useState('');

    const handleSearch = () => {
        //TODO
        console.log(searchPhrase);
    }

    return (
    <Box display="flex" 
        flexDirection="column"
        flexGrow={1}
        alignSelf="flex-start"
        alignItems="flex-start" 
        maxWidth="100vw"
        padding="2rem">
    
        <Typography variant="h4">
            <Box fontWeight='fontWeightBold'>App Catalogue</Box>
        </Typography>

        <Box 
            display="flex"
            alignSelf="flex-end">
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

