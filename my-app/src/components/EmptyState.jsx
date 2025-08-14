import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function EmptyUsersMessage() {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        mt: 3, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <InfoIcon color="primary" sx={{ fontSize: 50 }} />
      <Typography variant="h6" component="h2">
        No users found
      </Typography>
      <Typography variant="body1" color="textSecondary">
        The user list is currently empty. Please add new users to continue.
      </Typography>
    </Paper>
  );
}
