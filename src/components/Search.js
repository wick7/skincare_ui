/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import deBounce from './deBounce'
const filter = createFilterOptions();



export default function FreeSoloCreateOption({ data, setSearch }) {

    const [value, setValue] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchTerm = deBounce(searchValue, 200)

    useEffect(() => {
        setSearch(debouncedSearchTerm)
    }, [debouncedSearchTerm])

    const handleChange = (e, newValue) => {
        console.log(newValue)
        if (typeof newValue === 'string') {
            setSearch(newValue.product_name)
            setValue({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setSearch(newValue.product_name)
            setValue({
                title: newValue.inputValue,
            });
        } else {
            setSearch(newValue.product_name)
            setValue(newValue.inputValue);
        }
    }
    return (
        <Autocomplete
            value={value}
            onChange={handleChange}
            filterOptions={(options, params) => {
                setSearchValue(params.inputValue, 3000)
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== '') {
                    filtered.push({
                        inputValue: params.inputValue,
                        title: `Add "${params.inputValue}"`,
                    });
                }

                return filtered;
            }}

            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={data || []}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }
                // Regular option
                return option.product_name;
            }}
            renderOption={(option) => option.product_name}
            style={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label="Search by product name" variant="outlined" />
            )}
        />
    );
}
