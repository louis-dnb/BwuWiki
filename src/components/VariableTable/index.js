import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField } from "@mui/material";

function UsageDialog({ open, onClose, item }) {
  // ... your existing code
}

export default function VarTable(props) {
  const [open, setDialogOpen] = useState(false);
  const [currentVariable, setCurrentVariable] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleShowDialog = (variable) => {
    setCurrentVariable(variable);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const filteredVariables = props.variables
    .filter(item => 
      item.id.toString() === searchTerm ||
      item.varId.toString() === searchTerm ||
      item.description.toLowerCase() === searchTerm.toLowerCase()
    )
    .sort((a, b) => a.varId - b.varId);

  return (
    <>
      <TextField
  label="Search: Match Exactly"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  variant="outlined"
  size="small"
  fullWidth
  style={{
    marginBottom: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 5.1)',
    borderRadius: '8px',
    
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc', // Add your desired border color
      },
      '&:hover fieldset': {
        borderColor: '#aaa', // Add your desired hover border color
      },
    },
  }}
/>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>ID</th>
            <th>VAR_ID</th>
            <th>Description</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          {(searchTerm ? filteredVariables : props.variables).map((item) => (
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
      {searchTerm && filteredVariables.length === 0 && (
        <p>No matching results found.</p>
      )}
      {currentVariable && (
        <UsageDialog open={open} onClose={handleCloseDialog} item={currentVariable} />
      )}
    </>
  );
}
