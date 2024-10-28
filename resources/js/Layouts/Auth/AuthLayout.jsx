import { Alert, Box, Container, Grid2, Snackbar } from "@mui/material";
import React from "react";
import useSelectorHook from "../../hooks/useSelectorHook";
import { useDispatch } from "react-redux";
import { handleCloseToaster } from "../../redux/slices/auth/AuthSlice";
function AuthLayout({ children }) {
    const dispatch = useDispatch();
    const {
        toaster: { isShowToaster, message },
    } = useSelectorHook("auth");
    return (
        <Box
            component="div"
            sx={{
                height: "100vh",
                padding: { xs: "1rem", md: "3rem" },
            }}
        >
            <Snackbar
                open={isShowToaster}
                autoHideDuration={6000}
                onClose={() => dispatch(handleCloseToaster())}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => dispatch(handleCloseToaster())}
                    severity="error"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
            <Container
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box component="section" sx={{ height: "100%", width: "100%" }}>
                    <Grid2 container size={12} columnSpacing={5}>
                        <Grid2
                            size={6}
                            sx={{ display: { xs: "none", md: "block" } }}
                        >
                            <Box
                                display={{ md: "flex" }}
                                flexDirection={{ md: "column" }}
                                justifyContent={{ md: "center" }}
                                alignItems={{ md: "center" }}
                            >
                                <Box
                                    component="img"
                                    src="assets/images/auth/auth-banner.svg"
                                    maxWidth={"100%"}
                                    height={"auto"}
                                />
                            </Box>
                        </Grid2>
                        {children}
                    </Grid2>
                </Box>
            </Container>
        </Box>
    );
}

export default AuthLayout;
