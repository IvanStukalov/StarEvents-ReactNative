import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lowDist: 0,
    highDist: 1000000,
    searchValue: ''
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setLowDist: (state, { payload }) => {
            state.lowDist = payload;
        },
        setHighDist: (state, { payload }) => {
            state.highDist = payload;
        },
        setSearchValue: (state, { payload }) => {
            state.searchValue = payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { setLowDist, setHighDist, setSearchValue } = filterSlice.actions;