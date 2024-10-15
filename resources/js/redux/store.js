import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './slices/BlogSlice';
import AuthReducer from "./slices/auth/AuthSlice";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        blog: blogReducer,
    }
});

export default store;
