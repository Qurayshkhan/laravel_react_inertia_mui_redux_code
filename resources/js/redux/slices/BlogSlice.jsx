import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    message: null,
};

export const blogSlice = createSlice({
    name: "blog",
    initialState: initialState,
    reducers: {
        handleMessage(state, action) {
            state.message = "Welcome Hassan khan";
        },
    },
});

export default blogSlice.reducer;
export const { handleMessage } = blogSlice.actions;
