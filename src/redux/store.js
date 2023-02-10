import flightsReducer from './flightsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        flights: flightsReducer
    }
})