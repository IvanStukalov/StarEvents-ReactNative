import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stars: [],
    star: {name : ""},
};

export const starSlice = createSlice({
    name: 'star',
    initialState,
    reducers: {
        setStars: (state, { payload }) => {
            state.stars = payload.stars;
        },
        setStar: (state, { payload }) => {
            state.star = payload;
        },
        resetStar: (state) => {
            state.star = {};
        },
    },
});

export const starReducer = starSlice.reducer;

export const { setStars, setStar, resetStar } = starSlice.actions;
