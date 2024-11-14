import React, { useState } from "react";
import {
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  TextInput,
} from "@react-native-material/core";

interface AddNewDialogProps {
    isVisible: boolean,
    setIsVisible: (visibility:boolean) => void
}

export default function AddNewDialog(props:AddNewDialogProps) {

    return (
        <Dialog visible={props.isVisible} onDismiss={() => props.setIsVisible(false)}>
            hi!
        </Dialog>
    )
}
