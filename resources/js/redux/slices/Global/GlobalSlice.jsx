import { createSlice } from "@reduxjs/toolkit";
import GlobalReducer from "./GlobalReducer";
import GlobalStates from "./GlobalStates";
const GlobalSlice = createSlice({
    name: "global",
    initialState: GlobalStates,
    reducers: GlobalReducer,
});

export default GlobalSlice.reducer;
export const {
    handleOpenLogoutDialogue,
    handleCloseLogoutDialogue,
    handleCloseDialogue,
    handleStartLogOutingSession,
} = GlobalSlice.actions;
