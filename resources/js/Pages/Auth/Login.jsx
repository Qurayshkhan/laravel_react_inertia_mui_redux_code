import React from "react";
import {
    Box,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid2,
    TextField,
    Typography,
    Checkbox,
    Button,
    IconButton,
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import useCustomColors from "../../hooks/useCustomColor";
import AuthLayout from "../../Layouts/Auth/AuthLayout";
import { primary } from "../../theme/theme";
import { Link } from "@inertiajs/react";
import {
    handleCheckBox,
    showHidePassword,
} from "../../redux/slices/auth/AuthSlice";
import { useDispatch } from "react-redux";
import useSelectorHook from "../../hooks/useSelectorHook";
import { Visibility, VisibilityOff } from "@mui/icons-material";
function Login() {
    const { checked, showPassword } = useSelectorHook("auth");
    const dispatch = useDispatch();
    const { black, greyCloud } = useCustomColors();
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
                            variant="h3"
                            fontSize="1.75rem"
                            fontWeight={500}
                            lineHeight="1.2"
                            marginBottom="0.5rem"
                            color={black}
                        >
                            Sign In
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
                    <Box component="form">
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    required
                                    label="Email"
                                    type="email"
                                    aria-label="Email"
                                    autoComplete="Email"
                                />
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
                            </FormControl>
                        </FormGroup>

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection={{ xs: "column", md: "row" }}
                            mx={1}
                            mt={1}
                        >
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            name="remember_me"
                                            onChange={() =>
                                                dispatch(handleCheckBox())
                                            }
                                        />
                                    }
                                    label="Remember me"
                                />
                            </FormGroup>
                            <Box component="a" aria-label="Forgot Password">
                                Forgot Password
                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{ paddingY: "0.6rem", minWidth: "100%" }}
                            aria-label="Login"
                        >
                            Login
                        </Button>
                    </Box>
                    <Box mt={2} textAlign="center" color={primary}>
                        <Typography
                            color={black}
                            component="span"
                            aria-label="Don't have and Account?"
                        >
                            Don't have and Account?
                            <Link href="/register">
                                <Typography
                                    component="span"
                                    aria-label="Sign up"
                                >
                                    Sign up
                                </Typography>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid2>
        </AuthLayout>
    );
}

export default Login;
