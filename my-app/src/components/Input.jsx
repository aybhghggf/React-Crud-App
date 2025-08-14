import * as React from "react";
import {
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

export default function StaticUI() {
  return (
    <Box p={4}>
      {/* Input & Button */}
      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={4}>
        <TextField label="Enter user name" variant="outlined" sx={{ width: "300px" }} />
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Box>

    
    </Box>
  );
}
