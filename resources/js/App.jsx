import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Provider } from "react-redux";
import store from "./redux/store";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
const appName = import.meta.env.VITE_APP_NAME || "CODE APP";
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App {...props} />
                </ThemeProvider>
            </Provider>
        );
    },
    progress: {
        color: "#6c63ff",
    },
});
