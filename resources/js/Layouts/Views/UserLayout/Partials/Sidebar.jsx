import { useEffect, useState } from "react";
import { Box, Divider, IconButton, useMediaQuery } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightOutlined from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Logo from "@js/Components/Logo/Logo";
export default function Sidebar({ isOpen, setIsOpen }) {
    const isMobile = useMediaQuery(`(min-width: 768px)`);
    useEffect(() => {
        setIsOpen(isMobile);
    }, [isMobile]);
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Box
            component="div"
            sx={{
                width: {
                    xs: isOpen ? "70%" : "0",
                    lg: isOpen ? "20rem" : "5rem",
                },
                height: "100vh",
                transition: "width 0.3s ease",
            }}
            className="bg-white rounded-lg fixed z-20 border-r-2"
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "1rem",
                }}
            >
                <Box className="w-20">{isOpen && <Logo />}</Box>
                <IconButton
                    onClick={toggleSidebar}
                    color="primary"
                    className="bg-red-500"
                >
                    {isOpen ? (
                        <KeyboardDoubleArrowLeftIcon />
                    ) : (
                        <KeyboardDoubleArrowRightOutlined />
                    )}
                </IconButton>
            </Box>
            <Divider />
        </Box>
    );
}
