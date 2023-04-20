import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { teamsReducer } from './slices/teamsSlice';
import { playersReducer } from './slices/playersSlice';
import { loginReducer } from './slices/authSlice';
import { statsRedducer } from './slices/statsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        teamsNBA: teamsReducer,
        playersNBA: playersReducer,
        login: loginReducer,
        stats: statsRedducer,
    },
});

export default store;
