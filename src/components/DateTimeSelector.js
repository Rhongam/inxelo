import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CustomDateTimepicker } from './../utils/Theme.js';

export default function DateTimeSelector(props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomDateTimepicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={props.value}
                onChange={(newValue) => {
                    props.setValue(newValue);
                }}
                sx={
                    {
                        label: { color: 'grey.main' },
                        input: { color: 'grey.main' }
                    }
                }
            />
        </LocalizationProvider>
    );
}