import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { teamsReducer } from './slices/teamsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        teamsNBA: teamsReducer,
    },
});

export default store;
