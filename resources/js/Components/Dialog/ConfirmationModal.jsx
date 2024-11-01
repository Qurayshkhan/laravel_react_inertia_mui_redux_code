import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";

export default function ConfirmationModal({
    isOpenDialogue,
    handleClose,
    handleConfirm,
    description,
    title,
    loading,
}) {
    return (
        <React.Fragment>
            <Dialog
                open={isOpenDialogue}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="button"
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                    >
                        Cancel
                    </Button>
                    <LoadingButton
                        loading={loading}
                        type="submit"
                        onClick={handleConfirm}
                        autoFocus
                        variant="contained"
                        color="primary"
                    >
                        Yes do it!
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
