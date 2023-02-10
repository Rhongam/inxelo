import instance from './axiosEnv';

const getAllFlights = () => {
    return instance.get('/flights.json');
}

const getFlight = (data) => {
    return instance.get('/flights/' + data + '.json');
}

const addFlight = (data) => {
    return instance.post('/flights.json', {
        aircraftRegistration: data.aircraftRegistration,
        aircraftType: data.aircraftType,
        dateArrival: data.dateArrival,
        dateDeparture: data.dateDeparture,
        flightNumber: data.flightNumber
    });
}

const deleteFlight = (data) => {
    return instance.delete('/flights/' + data + '.json');
}

const flightsAPI = {
    getAllFlights,
    getFlight,
    addFlight,
    deleteFlight
}

export default flightsAPI;