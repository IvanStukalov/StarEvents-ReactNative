import { configureStore } from '@reduxjs/toolkit';
import { starReducer } from './starSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
    reducer: {
        star: starReducer,
        filter: filterReducer,
    },
});
