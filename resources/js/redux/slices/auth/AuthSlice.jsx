import { createSlice } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import AuthStates from "./AuthStates";

export const AuthSlice = createSlice({
    name: "auth",
    initialState: AuthStates,
    reducers: AuthReducer,
});
export default AuthSlice.reducer;
export const { showHidePassword, handleCheckBox } = AuthSlice.actions;
