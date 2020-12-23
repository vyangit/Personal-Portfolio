import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filterFab: {
            position: 'absolute',
            top: 'auto',
            left: 'auto',
            bottom: theme.spacing(6),
            right: theme.spacing(3)
        },
        fabDialog: {
            width: '80%'
        },
        boxY: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    }));

const catalogueViewModes = [
    'Catalogue',
    'Grid',
    'List',
]

const sortByModes = [
    'Name',
    'Newest to Oldest',
    'Oldest to Newest'
]

// TODO: Decide on categories (i.e 'Category': [''] )
const filterByTagGroups = new Map<string, string[]>();
filterByTagGroups.set('Platform', ['Android', 'iOS', 'PC']);
filterByTagGroups.set('Pricing', ['Free to use', 'Single payment', 'Subscription']);
    
class FilterTagWithGroup {
    label: string;
    group: string;

    constructor(label: string, group: string) {
        this.label = label;
        this.group = group;
    }
}

const createTagToTagGroupMap = (): Array<FilterTagWithGroup> => {
    const tagsWithGroups = new Array<FilterTagWithGroup>();
    filterByTagGroups.forEach((values: string[], key: string, map: Map<string, string[]>) => {
        for (let value of values) {
            tagsWithGroups.push(new FilterTagWithGroup(value, key));
        }
    });
    return tagsWithGroups
}

/**
 * Determines if the screen is less than the threshold width.
 * 
 * @returns True if screen width is less than 800 dp, else false
 */
const isScreenSmall = (): boolean => {
    return window.screen.width < 800
}

export default function CataloguePage() {
    const classes = useStyles();
    const filterOptions: Array<FilterTagWithGroup> = createTagToTagGroupMap()

    const [searchPhrase, setSearchPhrase] = useState('');
    const [catalogueViewMode, setCatalogueViewMode] = useState(catalogueViewModes[0]);
    const [sortByMode, setSortByMode] = useState(sortByModes[0]);
    const [selectedFilterTags, setSelectedFilterTags] = useState([]);
    const [showFilterAsFabFlag, setShowFilterAsFabFlag] = useState(isScreenSmall());
    const [openFabDialog, setOpenFabDialog] = useState(false);

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

    const handleCatalogueViewChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCatalogueViewMode(event.target.value as string);
    }

    const handleSortByChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSortByMode(event.target.value as string);
    }

    const handleCloseFabDialog = () => {
        setOpenFabDialog(false);
    }

    const handleOpenFabDialog = () => {
        setOpenFabDialog(true);
    }

    const handleApplyDialogFilters = () => {
        //TODO: Implement
        console.log('handleApplyDialogFilters');
        handleCloseFabDialog();
    }

    const filterResults = () => {
        // TODO: Implement
        console.log('filterResults')
    }

    const renderFilter = () => {
        if (!showFilterAsFabFlag) {
            return (
                <React.Fragment>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>View as:</InputLabel>
                            <Select
                                value={catalogueViewMode}
                                onChange={handleCatalogueViewChange}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }
                                }}>
                                {catalogueViewModes.map(viewMode => {
                                    return <MenuItem value={viewMode}>{viewMode}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Sort by:</InputLabel>
                            <Select
                                value={sortByMode}
                                onChange={handleSortByChange}
                                MenuProps={{
                                    getContentAnchorEl: null,
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }
                                }}>
                                {sortByModes.map(sortByMode => {
                                    return <MenuItem value={sortByMode}>{sortByMode}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                        <Autocomplete
                            multiple
                            options={filterOptions}
                            groupBy={(option) => option.group}
                            getOptionLabel={(option) => option.label}
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
                <React.Fragment>
                    <Fab color="primary" className={classes.filterFab} onClick={handleOpenFabDialog}>
                        <FilterListIcon />
                    </Fab>
                    <Dialog
                        open={openFabDialog}
                        onClose={handleCloseFabDialog}
                        maxWidth="lg"
                        PaperProps={{ className: classes.fabDialog }}>
                        <DialogTitle>Filters</DialogTitle>
                        <DialogContent>
                            <FormControl fullWidth>
                                <InputLabel>View as:</InputLabel>
                                <Select
                                    value={catalogueViewMode}
                                    onChange={handleCatalogueViewChange}
                                    MenuProps={{
                                        getContentAnchorEl: null,
                                        anchorOrigin: {
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        },
                                        transformOrigin: {
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }
                                    }}>
                                    {catalogueViewModes.map(viewMode => {
                                        return <MenuItem value={viewMode}>{viewMode}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>

                            <Box className={classes.boxY}>
                                <FormControl fullWidth>
                                    <InputLabel>Sort by:</InputLabel>
                                    <Select
                                        value={sortByMode}
                                        onChange={handleSortByChange}
                                        MenuProps={{
                                            getContentAnchorEl: null,
                                            anchorOrigin: {
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            },
                                            transformOrigin: {
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }
                                        }}>
                                        {sortByModes.map(sortByMode => {
                                            return <MenuItem value={sortByMode}>{sortByMode}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>

                            <Autocomplete
                                multiple
                                options={filterOptions}
                                groupBy={(option) => option.group}
                                getOptionLabel={(option) => option.label}
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
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={handleCloseFabDialog}>
                                Cancel
                            </Button>
                            <Button color="primary" onClick={handleApplyDialogFilters}>
                                Apply
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
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
                padding="3rem"
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
                            onChange={(event) => { setSearchPhrase(event.target.value) }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleSearch}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>)
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            {renderFilterAsFab()}
        </React.Fragment>
    );
}

