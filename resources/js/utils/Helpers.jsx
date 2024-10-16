import { router } from "@inertiajs/react";

export const tryCatchFn = async ({
    dispatch,
    apiFn,
    onSuccess = () => {},
    onError = () => {},
}) => {
    try {
        await apiFn();
        onSuccess();
    } catch (error) {
        if (error.status == 401) {
            router.visit("/login", { method: "get" });
        }
        onError();
        toast.error("er");
    }
};
