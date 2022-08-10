import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import { DialogContent, DialogContentText } from "@material-ui/core"

export default function DeleteConfirmation({
    open,
    close,
    onConfirm,
    data,
    ...props
}) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                {...props}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Deseja realmente excluir sua reserva?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={onConfirm(props.data)} color="secondary">
                        Confirmar
                    </Button>
                    <Button onClick={close} color="default">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
