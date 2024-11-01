import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/Auth/AuthSlice";
import GlobalReducer from "./Slices/Global/GlobalSlice";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        global: GlobalReducer,
    }
});

export default store;
