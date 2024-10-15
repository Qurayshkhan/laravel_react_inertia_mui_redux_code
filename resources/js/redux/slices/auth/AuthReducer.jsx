const AuthReducer = {
    showHidePassword(state, action) {
        state.showPassword = !state.showPassword;
    },
    handleCheckBox(state) {
        state.checked = !state.checked;
    },
};

export default AuthReducer;
