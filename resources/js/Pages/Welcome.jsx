import React from "react";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import UserLayout from "@js/Layouts/Views/UserLayout/UserLayout";
import CardContent from "@mui/material/CardContent";
import { Head } from "@inertiajs/react";

function Welcome() {
    return (
        <div>
            <Head title="Home" />
            <UserLayout>
                <Container>
                    <Card>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                            >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </UserLayout>
        </div>
    );
}

export default Welcome;
