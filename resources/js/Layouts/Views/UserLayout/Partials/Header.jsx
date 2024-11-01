import { AppBar, Box, Button } from "@mui/material";
import React from "react";
import AvatarMenu from "@js/Components/Dashboard/AvatarMenu";

function Header() {
    return (
        <>
            <Box component="nav" className="">
                <Box className="bg-white w-full flex justify-end p-4 fixed top-0 right-0 z-10 ">
                    <Box>
                        <AvatarMenu />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Header;
