import * as React from "react";
import { Box, Button, Typography, Modal, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 0,
  overflow: "hidden",
};

export default function BasicModal({ isOpen, isclose, userData }) {
  const handleClose = () => isclose(false);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {/* Header */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography id="modal-title" variant="h6" sx={{ fontWeight: "bold" }}>
            Détails de l'utilisateur
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            ID Utilisateur :
          </Typography>
          <Typography sx={{ mb: 2 }}>{userData.id}</Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Nom :
          </Typography>
          <Typography>{`Mr/M : ${userData.name}`}</Typography>
        </Box>

        <Divider />

        {/* Footer */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Fermer
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
