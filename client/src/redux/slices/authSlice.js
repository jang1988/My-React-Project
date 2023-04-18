import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchLoginThunk = createAsyncThunk('login/fetchLoginThunk', async (params) => {
    const { data } = await axios.post('/login', params);
    return data;
});

export const fetchRegisterThunk = createAsyncThunk('login/fetchRegisterThunk', async (params) => {
    const { data } = await axios.post('/register', params);
    return data;
});

export const fetchAuthThunk = createAsyncThunk('login/fetchAuthThunk', async () => {
    const { data } = await axios.get('/getMe');
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
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

        [fetchAuthThunk.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchAuthThunk.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        },
        [fetchAuthThunk.rejected]: (state) => {
            state.status = 'error';
        },

        [fetchRegisterThunk.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchRegisterThunk.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        },
        [fetchRegisterThunk.rejected]: (state) => {
            state.status = 'error';
        },
    },
});

export const selectLogin = (state) => Boolean(state.login.data);

export const { logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
