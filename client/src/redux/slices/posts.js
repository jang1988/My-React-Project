import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPostThunk = createAsyncThunk('post/fetchPost', async () => {
    const { data } = await axios.get('/posts');
    console.log('data: ', data)
    return data;
});

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    },
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPostThunk.pending]: (state) => {
            state.posts.status = 'loading'
        },

        [fetchPostThunk.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'success'
        },
        
        [fetchPostThunk.rejected]: (state) => {
            state.posts.status = 'error'
        },
    },
});

export const postsReducer = postSlice.reducer;
