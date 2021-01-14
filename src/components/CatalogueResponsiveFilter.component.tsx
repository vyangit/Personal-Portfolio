import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import filterByTagGroups from '@constants/TagGroups.constants';
import sortByModes from '@constants/SortModes.constants'
import catalogueViewModes from '@constants/CatalogueViewModes.constants'

import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
        },
        filterTagsRoot: {
            minHeight: '2rem'
        }
    }));


interface FilterValues {
    catalogueViewMode: string,
    sortByMode: string,
    selectedFilterTags: FilterTagWithGroup[]
}

interface CatalogueResponsiveFilterProps {
    showFilterAsFabFlag?: boolean;
    filterValues: FilterValues;
    setFilterValues: Function;
}

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

export default function CatalogueResponsiveFilterComponent(props: CatalogueResponsiveFilterProps) {
    const classes = useStyles();

    const [openFabDialog, setOpenFabDialog] = useState(false);
    const [fabDialogFilterTmpValues, setFabDialogFilterTmpValues] = useState({
        catalogueViewMode: props.filterValues.catalogueViewMode,
        sortByMode: props.filterValues.sortByMode,
        selectedFilterTags: [...props.filterValues.selectedFilterTags]
    });
    const filterOptions: Array<FilterTagWithGroup> = createTagToTagGroupMap()

    const handleCatalogueViewChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setFilterValues({
            ...props.filterValues,
            catalogueViewMode: event.target.value as string
        });
    }

    const handleSortByChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setFilterValues({
            ...props.filterValues,
            sortByMode: event.target.value as string
        });
    }

    const handleFilterTagsChange = (value: FilterTagWithGroup[]) => {
        props.setFilterValues({
            ...props.filterValues,
            selectedFilterTags: [...value]
        });
    }

    const handleOpenFabDialog = () => {
        setFabDialogFilterTmpValues(props.filterValues);

        setOpenFabDialog(true);
    }

    const handleCloseFabDialog = () => {
        setOpenFabDialog(false);
    }

    const handleApplyDialogFilters = () => {
        props.setFilterValues({
            catalogueViewMode: fabDialogFilterTmpValues.catalogueViewMode,
            sortByMode: fabDialogFilterTmpValues.sortByMode,
            selectedFilterTags: [...fabDialogFilterTmpValues.selectedFilterTags]
        });

        handleCloseFabDialog();
    }

    const renderAsFab = () => (
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
                            value={fabDialogFilterTmpValues.catalogueViewMode}
                            onChange={(e) => {
                                setFabDialogFilterTmpValues({
                                    ...fabDialogFilterTmpValues,
                                    catalogueViewMode: (e.target.value as string)
                                })
                            }}
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
                                value={fabDialogFilterTmpValues.sortByMode}
                                onChange={(e) => {
                                    setFabDialogFilterTmpValues({
                                        ...fabDialogFilterTmpValues,
                                        sortByMode: e.target.value as string
                                    })
                                }}
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
                        disableCloseOnSelect
                        value={fabDialogFilterTmpValues.selectedFilterTags}
                        options={filterOptions}
                        groupBy={(option) => option.group}
                        getOptionLabel={(option) => option.label}
                        getOptionSelected={(option, value) => option.label === value.label}
                        onChange={(_, value) => {
                            setFabDialogFilterTmpValues({
                                ...fabDialogFilterTmpValues,
                                selectedFilterTags: value
                            })
                        }}
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
    );

    const renderFilter = () => {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>View as:</InputLabel>
                        <Select
                            value={props.filterValues.catalogueViewMode}
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
                            value={props.filterValues.sortByMode}
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
                        disableCloseOnSelect
                        classes={{ inputRoot: classes.filterTagsRoot }}
                        size="small"
                        limitTags={3}
                        value={props.filterValues.selectedFilterTags}
                        options={filterOptions}
                        groupBy={(option) => option.group}
                        getOptionLabel={(option) => option.label}
                        getOptionSelected={(option, value) => option.label === value.label}
                        onChange={(_, value) => { handleFilterTagsChange(value) }}
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
    }


    if (!props.showFilterAsFabFlag) {
        return renderFilter();
    } else {
        return renderAsFab();
    }
}

export { FilterTagWithGroup };
export type { FilterValues };
