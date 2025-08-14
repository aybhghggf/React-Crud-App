import * as React from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function EditUserModal({ isOpen, handleClose,theIndex,newInfo}) {
  const [value, setValue] = useState(null);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="edit-user-modal"
      aria-describedby="modal-to-edit-user-name"
    >
      <Box sx={style}>
        <Typography id="edit-user-modal" variant="h6" component="h2" mb={2}>
          Edit User Name number:{theIndex}
        </Typography>
        <TextField
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
          fullWidth
          label="New Name"
          variant="outlined"
        />
        <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="contained" color="primary" onClick={()=>{newInfo(theIndex,value);
            handleClose(false);
            
          }}>
            Save
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              handleClose(false);
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
