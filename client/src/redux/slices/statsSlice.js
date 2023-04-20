import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stats: [],
    params: { total_page: 5 },
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        setStats(state, action) {
            state.stats = action.payload.data;
        },
        setParams(state, action) {
            state.params = action.payload.meta;
        },
    },
});

export const { setStats, setParams } = statsSlice.actions;

export const statsRedducer = statsSlice.reducer;
