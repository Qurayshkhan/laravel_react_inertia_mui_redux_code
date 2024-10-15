import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import UserLayout from "../Layouts/Views/UserLayout";
import NavDrawer from "../Components/Drawer/NavDrawer";

function Welcome() {
    return (
        <div>
            <UserLayout>
                <Container>
                    <Typography variant="h3">Hello World</Typography>
                </Container>
            </UserLayout>
        </div>
    );
}

export default Welcome;
