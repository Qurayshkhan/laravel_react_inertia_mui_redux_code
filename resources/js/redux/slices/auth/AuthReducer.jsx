const AuthReducer = {
    showHidePassword(state, action) {
        state.showPassword = !state.showPassword;
    },
    handleCheckBox(state) {
        state.checked = !state.checked;
    },
    handleLoading(state, action) {
        state.isLoading = action.payload;
    },
    handleCloseToaster(state, action) {
        state.toaster.isShowToaster = false;
    },
    handleShowToaster(state, action) {
        state.toaster.isShowToaster = true;
        state.toaster.message = action.payload;
    },
};

export default AuthReducer;
