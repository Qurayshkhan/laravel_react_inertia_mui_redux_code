import { Box } from "@mui/material";
import React from "react";

function LogoSmall() {
    return (
        <Box
            component="img"
            src="/assets/logo/logo-white.png"
            sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
            }}
            width={100}
        />
    );
}

export default LogoSmall;
