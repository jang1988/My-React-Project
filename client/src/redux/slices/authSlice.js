import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLoginThunk = createAsyncThunk('login/fetchLoginThunk', async (params) => {
    const { data } = await axios.post('http://localhost:4444/login', params);
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchLoginThunk.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchLoginThunk.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        },

        [fetchLoginThunk.rejected]: (state) => {
            state.status = 'error';
        },
    },
});

export const loginReducer = loginSlice.reducer;
