import React, { useState } from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText} from "@mui/material";

function UsageDialog({ open, onClose, item }) {
    const copyToClipboard = async (text) => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            document.execCommand('copy', true, text);
        }
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Variable Usage</DialogTitle>
            <DialogContent>
                <DialogContentText>Type: {item.type}</DialogContentText>
                <DialogContentText>ID: {item.id}</DialogContentText>
                <DialogContentText>Var ID: {item.varId}</DialogContentText>
                <DialogContentText>Description: {item.description}</DialogContentText>
                <DialogContentText>Var Access: {`VarManager.getVarValue(VarDomainType.PLAYER, ${item.varId})`}</DialogContentText>
                <DialogContentText>Varbit Access: {`VarManager.getVarbitValue(${item.id})`}</DialogContentText>
                <Button
                    onClick={() => copyToClipboard(`VarManager.getVarValue(VarDomainType.PLAYER, ${item.varId})`)}
                    variant="outlined">
                    Copy Var Access
                </Button>
                <Button
                    onClick={() => copyToClipboard(`VarManager.getVarbitValue(${item.id})`)}
                    variant="outlined">
                    Copy Varbit Access
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default function VarTable(props) {
    const [open, setDialogOpen] = useState(false);
    const [currentVariable, setCurrentVariable] = useState({});

    const handleShowDialog = (variable) => {
        setCurrentVariable(variable);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>TYPE</th>
                    <th>ID</th>
                    <th>VAR_ID</th>
                    <th>Description</th>
                    <th>Usage</th>
                </tr>
                </thead>
                <tbody>
                {props.variables.map((item) => (
                    <tr key={item.id} className={item.id % 2 === 0 ? 'even' : 'odd'}>
                        <td>{item.type}</td>
                        <td>{item.id}</td>
                        <td>{item.varId}</td>
                        <td>{item.description}</td>
                        <td>
                            <Button onClick={() => handleShowDialog(item)}>
                                Show
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {currentVariable && (
                <UsageDialog open={open} onClose={handleCloseDialog} item={currentVariable} />
            )}
        </>
    );
}