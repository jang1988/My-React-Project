import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTeamsThunk = createAsyncThunk(
    'teams/fetchTeamsStatus',
    async ({ currentPage }) => {
        const { data } = await axios.get(
            `https://www.balldontlie.io/api/v1/teams?page=${currentPage}`,
        );
        return data;
    },
);

const initialState = {
    teams: [],
    params: { total_pages: 5 },
    status: 'loading', // loading | success | error
};

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        setTeams(state, action) {
            state.teams = action.payload;
        },
        setParams(state, action) {
            state.params = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTeamsThunk.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchTeamsThunk.fulfilled, (state, action) => {
            state.teams = action.payload.data;
            state.params = action.payload.meta;
            state.status = 'success';
        });
        builder.addCase(fetchTeamsThunk.rejected, (state, action) => {
            state.teams = [];
            state.status = 'error';
        });
    },
    // extraReducers: {
    //     [fetchTeamsThunk.pending]: (state) => {
    //         state.teams = [];
    //         state.status = 'loading';
    //     },
    //     [fetchTeamsThunk.fulfilled]: (state, action) => {
    //         state.teams = action.payload.data;
    //         state.params = action.payload.meta;
    //         state.status = 'success';
    //     },
    //     [fetchTeamsThunk.rejected]: (state) => {
    //         state.teams = [];
    //         state.status = 'error';
    //     },
    // },
});

export const { setTeams, setParams } = teamsSlice.actions;

export const teamsReducer = teamsSlice.reducer;
