import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { createTheme } from "@mui/material/styles";
export const primary = "#6c63ff";
export const black = "#212529";
export const greyCloud = "#b3b3b3";
const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
    },
    palette: {
        primary: {
            light: "#757ce8",
            main: "#6c63ff",
            dark: "#6c63ff",
            contrastText: "#fff",
        },
        custom: {
            primary,
            black,
            greyCloud,
        },
    },
});

export default theme;
