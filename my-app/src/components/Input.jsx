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
  Paper,
} from "@mui/material";
import { useState } from "react";




export default function StaticUI({getuser}) {
  const [valueInput, setValueInput] = useState(null);

  return (
    <Box p={4}>
      {/* Input & Button */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={4}
      >
        <TextField
        value={valueInput}
          label="Enter user name"
          variant="outlined"
          sx={{ width: "300px" }}
          onChange={(e)=>{setValueInput(e.target.value)}}
        />
        <Button variant="contained" color="primary" onClick={()=>{
            getuser(valueInput)
        }}>
          Add
        </Button>
      </Box>
    </Box>
  );
}
