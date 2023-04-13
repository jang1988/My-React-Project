import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { teamsReducer } from './slices/teamsSlice';
import { playersReducer } from './slices/playersSlice';
import { loginReducer } from './slices/authSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        teamsNBA: teamsReducer,
        playersNBA: playersReducer,
        login: loginReducer,
    },
});

export default store;
