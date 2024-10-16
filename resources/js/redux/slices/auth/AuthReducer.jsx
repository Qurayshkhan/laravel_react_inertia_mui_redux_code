const AuthReducer = {
    showHidePassword(state, action) {
        state.showPassword = !state.showPassword;
    },
    handleCheckBox(state) {
        state.checked = !state.checked;
    },
    handleLoading(state, action) {
        console.log("🚀 ~ handleLoading ~ payload:", action.payload);

        state.isLoading = action.payload;
    },
};

export default AuthReducer;
