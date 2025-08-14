import * as React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

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

export default function BasicModal({isOpen ,isclose}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    isclose(false)
  }
  return (
    <div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Material UI Modal
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This is a basic modal using Material UI.  
            You can customize size, style, and content easily.
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ mt: 3 }}
            color="secondary"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
