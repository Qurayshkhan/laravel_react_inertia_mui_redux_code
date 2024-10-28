import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const UserLayout = ({ children }) => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default UserLayout;
