import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

export default function UsersTable({ utilisateurs, booleanFunction, InfoUser }) {
  const handleView = (userName, index) => {
    InfoUser(index, userName);
  };

  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {utilisateurs.map((userName, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{userName}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="view"
                    color="primary"
                    onClick={() => handleView(userName, index)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="edit" 
                    color="secondary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="delete" 
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
