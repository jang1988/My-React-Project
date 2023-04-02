import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    players: [],
    params: {total_pages: 5},
    search: '',
};

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        setPlayers(state, action) {
            state.players = action.payload
        },
        setParams(state, action) {
            state.params = action.payload
        },
        setSearch(state, action) {
            state.search = action.payload
        },
    },
});

export const { setPlayers, setParams, setSearch } = playersSlice.actions;

export const playersReducer = playersSlice.reducer
