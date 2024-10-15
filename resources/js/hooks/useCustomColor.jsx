import { useTheme } from "@mui/material";

const useCustomColors = () => {
    const theme = useTheme();
    return theme.palette.custom;
};

export default useCustomColors;
