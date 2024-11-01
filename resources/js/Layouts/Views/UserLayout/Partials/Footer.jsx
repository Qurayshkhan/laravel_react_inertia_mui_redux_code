import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <>
            <Box
                component="footer"
                className="w-full bg-white rounded-l-sm fixed bottom-0 text-center"
            >
                <Box>
                    <Typography component="p">
                        All right reserved {"Copyright © "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Footer;
