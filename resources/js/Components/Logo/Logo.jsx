import { Box } from "@mui/material";
import React from "react";

function Logo() {
    return (
        <Box
            component="img"
            src="/assets/logo/main.png"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            paddingLeft={1}
        />
    );
}

export default Logo;
