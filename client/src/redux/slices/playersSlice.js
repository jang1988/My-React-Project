import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    players: [],
    params: {},
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
    },
});

export const { setPlayers, setParams } = playersSlice.actions;

export const playersReducer = playersSlice.reducer
