import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teams: [],
    params: {total_pages: 5},
};

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        setTeams(state, action) {
            state.teams = action.payload
        },
        setParams(state, action) {
            state.params = action.payload
        },
    },
});

export const { setTeams, setParams } = teamsSlice.actions;

export const teamsReducer = teamsSlice.reducer
