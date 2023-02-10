import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import DateTimeSelector from './DateTimeSelector';
import { addFlight } from '../redux/flightsSlice';
import { store } from '../redux/store';

import { theme, CustomTextField } from './../utils/Theme.js';
import { ThemeProvider } from '@mui/material/styles';

export default function FlightForm() {
    const [open, setOpen] = useState(false);
    const [number, setNumber] = useState('');
    const [registration, setRegistration] = useState('');
    const [type, setType] = useState('');

    const [startDate, setStartDate] = useState(dayjs('2023-02-10T00:00:00:000Z'));
    const [endDate, setEndDate] = useState(dayjs('2023-02-10T01:00:00:000Z'));

    const [dispatchData, setDispatchData] = useState({});

    useEffect(() => {
        setDispatchData({
            aircraftRegistration: registration,
            aircraftType: type,
            dateArrival: startDate.$d,
            dateDeparture: endDate.$d,
            flightNumber: number
        })
    }, [registration, type, startDate, endDate, number])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ color: '#ffb300' }}>
                <Button variant="outlined" onClick={handleClickOpen} sx={{ color: '#ffb300', border: '1px solid #ffb300', m: 2, p: 1 }}>
                    Add flight
                </Button>
                <Dialog open={open} onClose={handleClose} PaperProps={{ style: { border: '1px solid #ffb300', backgroundColor: '#151719' } }}>
                    <DialogTitle sx={{ fontWeight: 600 }}>Add new Flight</DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ color: 'white' }}>
                            Enter flight information in form:
                        </DialogContentText>
                        <CustomTextField
                            margin="dense"
                            id="flight-number"
                            label="Flight Number"
                            fullWidth
                            onChange={event => setNumber(event.target.value)}
                            sx={
                                {
                                    label: { color: 'grey.main' },
                                    input: { color: 'white' }
                                }
                            }
                        />
                        <CustomTextField
                            margin="dense"
                            id="aircraft-type"
                            label="Aircraft type"
                            fullWidth
                            onChange={event => setType(event.target.value)}
                            sx={
                                {
                                    label: { color: 'grey.main' },
                                    input: { color: 'white' }
                                }
                            }
                        />
                        <CustomTextField
                            margin="dense"
                            id="registration-number"
                            label="Registration Number"
                            fullWidth
                            onChange={event => setRegistration(event.target.value)}
                            sx={
                                {
                                    label: { color: 'grey.main' },
                                    input: { color: 'white' }
                                }
                            }
                        />
                        <Box sx={{ pt: 2 }} >
                            <DateTimeSelector value={startDate} setValue={setStartDate} />
                            <DateTimeSelector value={endDate} setValue={setEndDate} color='secondary' />
                        </Box>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { handleClose(); store.dispatch(addFlight(dispatchData)) }}>Add</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    );
}