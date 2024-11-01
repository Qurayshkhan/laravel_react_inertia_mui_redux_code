import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import { Card, CardContent } from "@mui/material";
import Sidebar from "./Partials/Sidebar";

const UserLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Box className="flex flex-col h-screen bg-gray-200">
            <Box className="flex flex-grow">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                <Box className="flex flex-col w-full">
                    <Header />
                    <Box
                        component="main"
                        className="flex-grow mx-4 mt-20"
                        sx={{ ml: { lg: isOpen ? "21rem" : "6rem" } }}
                    >
                        <Card className="mt-2 mr-2">
                            <Box className="">
                                <CardContent>{children}</CardContent>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default UserLayout;
