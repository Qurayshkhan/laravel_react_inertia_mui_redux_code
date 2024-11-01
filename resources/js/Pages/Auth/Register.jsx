import React, { useState } from "react";
import {
    Box,
    FormControl,
    FormGroup,
    Grid2,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import useCustomColors from "../../CustomHooks/useCustomColor";
import AuthLayout from "../../Layouts/Auth/AuthLayout";
import { primary } from "../../Theme/Theme";
import { Link, router, usePage } from "@inertiajs/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useSelectorHook from "../../CustomHooks/useSelectorHook";
import { useDispatch } from "react-redux";
import {
    handleLoading,
    showHidePassword,
} from "../../Redux/Slices/Auth/AuthSlice";
import { useFormik } from "formik";
import { RegisterSchema } from "../../Schemas/AuthSchema";

function Register(props) {
    const { errors: backendError } = usePage().props;
    const { black, greyCloud } = useCustomColors();
    const { showPassword, registerUser, isLoading } = useSelectorHook("auth");
    const dispatch = useDispatch();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: registerUser,
            validationSchema: RegisterSchema,
            onSubmit: async (values, actions) => {
                dispatch(handleLoading(true));
                try {
                    router.post("/register", values, {
                        onFinish: () => {
                            dispatch(handleLoading(false));
                        },
                    });
                } catch (error) {
                    console.log(backendError);
                    dispatch(handleLoading(false));
                }
            },
        });

    return (
        <AuthLayout>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    minHeight="100%"
                >
                    <Box>
                        <Typography
                            component="span"
                            variant="h3"
                            fontSize="1.75rem"
                            fontWeight={500}
                            lineHeight="1.2"
                            marginBottom="0.5rem"
                            color={black}
                        >
                            Sign Up
                        </Typography>
                        <Typography
                            variant="body1"
                            mb={2}
                            fontWeight={300}
                            color={greyCloud}
                        >
                            By creating an account or signing in, you understand
                            and agree to our Terms. You also acknowledge our
                            Cookie and Privacy policies.
                        </Typography>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    label="Name"
                                    type="text"
                                    aria-label="Name"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <Typography
                                    component="span"
                                    color="error"
                                    variant="body1"
                                >
                                    {backendError.name}
                                </Typography>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl sx={{ mt: 2 }}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    aria-label="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    error={
                                        touched.email && Boolean(errors.email)
                                    }
                                    helperText={touched.email && errors.email}
                                />
                                <Typography
                                    component="span"
                                    color="error"
                                    variant="body1"
                                >
                                    {backendError.email}
                                </Typography>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl sx={{ mt: 2 }}>
                                <TextField
                                    label="Password"
                                    type={!showPassword ? "password" : "text"}
                                    aria-label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                    error={
                                        touched.password &&
                                        Boolean(errors.password)
                                    }
                                    helperText={
                                        touched.password && errors.password
                                    }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    onClick={() =>
                                                        dispatch(
                                                            showHidePassword()
                                                        )
                                                    }
                                                >
                                                    {!showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Typography
                                    component="span"
                                    color="error"
                                    variant="body1"
                                >
                                    {backendError.password}
                                </Typography>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl sx={{ mt: 2 }}>
                                <TextField
                                    label="Confirm Password"
                                    type={!showPassword ? "password" : "text"}
                                    aria-label="Confirm Password"
                                    name="password_confirmation"
                                    onChange={handleChange}
                                    value={values.password_confirmation}
                                    onBlur={handleBlur}
                                    error={
                                        touched.password_confirmation &&
                                        Boolean(errors.password_confirmation)
                                    }
                                    helperText={
                                        touched.password_confirmation &&
                                        errors.password_confirmation
                                    }
                                />
                                <Typography
                                    component="span"
                                    color="error"
                                    variant="body1"
                                >
                                    {backendError.password_confirmation}
                                </Typography>
                            </FormControl>
                        </FormGroup>
                        <LoadingButton
                            type="submit"
                            loading={isLoading}
                            loadingPosition="center"
                            variant="contained"
                            sx={{ paddingY: "0.6rem", minWidth: "100%", mt: 2 }}
                            aria-label="Register"
                        >
                            Register
                        </LoadingButton>
                    </Box>
                    <Box mt={2} textAlign="center" color={primary}>
                        <Typography color={black} component="span">
                            Already have an account?
                            <Link href="/login">
                                <Typography component="span">
                                    Sign In
                                </Typography>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid2>
        </AuthLayout>
    );
}

export default Register;
