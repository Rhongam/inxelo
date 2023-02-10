import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllFlights } from './../redux/flightsSlice';
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FlightForm from '../components/FlightForm';

import { removeFlight } from '../redux/flightsSlice';
import { store } from '../redux/store';

const Dashboard = () => {
    const flights = useSelector(selectAllFlights);

    useEffect(() => {
        document.title = 'Dashboard';
    }, []);

    const flightsArray = [];

    if (Object.keys(flights).length > 0) {
        for (let i = 0; i < Object.keys(flights).length; i++) {
            flightsArray.push({
                id: Object.keys(flights)[i],
                flightNumber: Object.values(flights)[i].flightNumber,
                dateDeparture: Object.values(flights)[i].dateDeparture,
                dateArrival: Object.values(flights)[i].dateArrival,
                aircraftType: Object.values(flights)[i].aircraftType,
                aircraftRegistration: Object.values(flights)[i].aircraftRegistration
            })
        }
    }

    return (
        <Grid container className='dashboard-container'>
            <Grid container>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: '#ffb300', p: 2 }}>
                    Dashboard
                </Typography >
            </Grid>
            <TableContainer sx={{  p: 2 }}>
                <Table >
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ color: '#ffb300', fontWeight: 600, fontSize: 16 }}>Flight number</TableCell>
                            <TableCell sx={{ color: '#ffb300', fontWeight: 600, fontSize: 16 }}>Departure time</TableCell>
                            <TableCell sx={{ color: '#ffb300', fontWeight: 600, fontSize: 16 }}>Landing time</TableCell>
                            <TableCell sx={{ color: '#ffb300', fontWeight: 600, fontSize: 16 }}>Aircraft type</TableCell>
                            <TableCell sx={{ color: '#ffb300', fontWeight: 600, fontSize: 16 }}>Registration number</TableCell>
                            <TableCell sx={{ color: '#ffb300', fontWeight: 600, fontSize: 16 }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flightsArray.map((aircraft) => (
                            <TableRow key={aircraft.id}>
                                <TableCell sx={{ color: 'white' }}>{aircraft.flightNumber}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{aircraft.dateDeparture}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{aircraft.dateArrival}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{aircraft.flightNumber}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{aircraft.aircraftRegistration}</TableCell>
                                <TableCell sx={{ color: 'white' }}>
                                    <Button onClick={() => store.dispatch(removeFlight(aircraft.id))}
                                        variant="outlined" color="error" startIcon={<DeleteIcon sx={{ fill: 'red' }} />}>
                                        Remove
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <FlightForm flights={flights} />
        </Grid >
    );
};
export default Dashboard;