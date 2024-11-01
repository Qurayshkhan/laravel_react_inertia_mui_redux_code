import { router } from "@inertiajs/react";

const GlobalReducer = {
    handleOpenLogoutDialogue(state, action) {
        state.isOpeLogoutDialogue = true;
    },
    handleCloseLogoutDialogue(state, action) {
        state.isOpeLogoutDialogue = false;
    },

    handleStartLogOutingSession(state) {
        state.isLogOuting = true;
    },
    handleCloseDialogue(state) {
        state.isOpeLogoutDialogue = false;
        state.isLogOuting = false;
    },
};

export default GlobalReducer;
