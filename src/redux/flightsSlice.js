import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from './../api/index';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchAllFlights = createAsyncThunk('flights/fetchallflights', async () => {
    const response = await API.flights.getAllFlights();
    return response.data;
})

export const fetchFlight = createAsyncThunk('flights/fetchflight', async (data) => {
    const response = await API.flights.getFlight(data);
    return response.data;
})

export const addFlight = createAsyncThunk('flights/addflight', async (data) => {
    const response = await API.flights.addFlight(data);
    return response.data
})

export const removeFlight = createAsyncThunk('flights/removeflight', async (data) => {
    const response = await API.flights.deleteFlight(data);
    return response.data
})

export const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        addflight: (data, action) => { data.push(action.payload) }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFlights.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllFlights.rejected, (state) => {
                state.status = 'failed';
                state.error = '';
            })
            .addCase(fetchAllFlights.fulfilled, (state, action) => {
                state.status = 'complete';
                state.data = action.payload;
            })
    }

});

export const selectAllFlights = (state) => {
    return state.flights.data;
}

export const selectFlight = (state, flightId) => {
    return state.flights.find(flight => flight.id === flightId)
}

export const createFlight = (state) => {
    return state.flights.data;
}

export const deleteFlight = (state, flightId) => {
    return state.flights.map(flight => flight.id !== flightId)
}

export default flightsSlice.reducer;