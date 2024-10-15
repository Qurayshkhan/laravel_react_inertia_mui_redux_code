import { Box } from "@mui/material";
import React from "react";

function Logo() {
    return (
        <Box
            component="img"
            src="/assets/logo/logo-white.png"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            width={100}
        />
    );

    // <img src="/assets/logo/Indeed_logo.svg" />;
}

export default Logo;
