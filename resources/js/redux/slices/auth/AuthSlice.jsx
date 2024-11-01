import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import AuthStates from "./AuthStates";
import { router } from "@inertiajs/react";

export const AuthSlice = createSlice({
    name: "auth",
    initialState: AuthStates,
    reducers: AuthReducer,
});
export default AuthSlice.reducer;
export const {
    showHidePassword,
    handleCheckBox,
    handleLoading,
    handleCloseToaster,
    handleShowToaster,
} = AuthSlice.actions;
