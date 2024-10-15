import React from "react";
import {
    Box,
    FormControl,
    FormGroup,
    Grid2,
    TextField,
    Typography,
    Button,
    InputAdornment,
    IconButton,
} from "@mui/material";
import useCustomColors from "../../hooks/useCustomColor";
import AuthLayout from "../../Layouts/Auth/AuthLayout";
import { primary } from "../../theme/theme";
import { Link } from "@inertiajs/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useSelectorHook from "../../hooks/useSelectorHook";
import { useDispatch } from "react-redux";
import { showHidePassword } from "../../redux/slices/auth/AuthSlice";
import { useFormik } from "formik";
import { RegisterSchema } from "../../schemas/AuthSchema";
function Register() {
    const { black, greyCloud } = useCustomColors();
    const { showPassword, registerUser } = useSelectorHook("auth");
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: registerUser,
            validationSchema: RegisterSchema,
            onSubmit: async (values, actions) => {
                console.log("🚀 ~ Register ~ values:", values);
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
                            and agree to Indeed's Terms. You also acknowledge
                            our Cookie and Privacy policies.
                        </Typography>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    required
                                    label="Name"
                                    type="text"
                                    aria-label="Name"
                                    autoComplete="Name"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? (
                                    <Typography
                                        color="error"
                                        variant="body1"
                                        component="span"
                                    >
                                        {errors.name}
                                    </Typography>
                                ) : null}
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl sx={{ mt: 2 }}>
                                <TextField
                                    required
                                    label="Email"
                                    type="email"
                                    aria-label="Email"
                                    autoComplete="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                    <Typography
                                        color="error"
                                        variant="body1"
                                        component="span"
                                    >
                                        {errors.email}
                                    </Typography>
                                ) : null}
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl sx={{ mt: 2 }}>
                                <TextField
                                    required
                                    label="Password"
                                    type={!showPassword ? "password" : "text"}
                                    aria-label="Password"
                                    autoComplete="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
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
                                {errors.password && touched.password ? (
                                    <Typography
                                        color="error"
                                        variant="body1"
                                        component="span"
                                    >
                                        {errors.password}
                                    </Typography>
                                ) : null}
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl sx={{ mt: 2 }}>
                                <TextField
                                    required
                                    label="Confirm Password"
                                    type={!showPassword ? "password" : "text"}
                                    aria-label="Confirm Password"
                                    autoComplete="Confirm Password"
                                    name="password_confirmation"
                                    onChange={handleChange}
                                    value={values.password_confirmation}
                                    onBlur={handleBlur}
                                />
                                {errors.password_confirmation &&
                                touched.password_confirmation ? (
                                    <Typography
                                        color="error"
                                        variant="body1"
                                        component="span"
                                    >
                                        {errors.password_confirmation}
                                    </Typography>
                                ) : null}
                            </FormControl>
                        </FormGroup>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ paddingY: "0.6rem", minWidth: "100%", mt: 2 }}
                            aria-label="Register"
                        >
                            Register
                        </Button>
                    </Box>
                    <Box mt={2} textAlign="center" color={primary}>
                        <Typography
                            color={black}
                            component="span"
                            aria-label="Already have an account?"
                        >
                            Already have an account?
                            <Link href="/login">
                                <Typography
                                    component="span"
                                    aria-label="Sign In"
                                >
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
