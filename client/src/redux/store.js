import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { teamsReducer } from './slices/teamsSlice';
import { playersReducer } from './slices/playersSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        teamsNBA: teamsReducer,
        playersNBA: playersReducer,
    },
});

export default store;
