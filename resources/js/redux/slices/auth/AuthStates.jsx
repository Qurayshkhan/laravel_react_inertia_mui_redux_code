const AuthState = {
    user: null,
    checked: false,
    showPassword: false,
    isLoading: false,
    registerUser: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    },
    login: {
        email: "",
        password: "",
    },
    toaster: {
        isShowToaster: false,
        message: "Hello world",
    },
};

export default AuthState;
