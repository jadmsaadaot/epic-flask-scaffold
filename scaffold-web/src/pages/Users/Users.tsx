import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { User } from "@/models/User";
import { useUsersData } from "@/hooks/useUsers";
import { useState } from "react";
import AddUserModal from "./AddUser";
import { useQueryClient } from "@tanstack/react-query";

export default function UserListPage() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const { isLoading, data, isError, error } = useUsersData();

  const handleOpenModal = (user?: User) => {
    setSelectedUser(user || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleOnSubmit = () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
    handleCloseModal();
  };

  const users: Array<User> = (data as AxiosResponse)?.data;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h2>Users List</h2>
        <Button
          onClick={() => handleOpenModal()}
          variant="outlined"
          color="primary"
          sx={{ width: "160px" }}
        >
          Add New User
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table width={"100%"} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>First name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Last name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row: User) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`${row.id}`}>{row.first_name}</Link>
                </TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email_address}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    onClick={() => handleOpenModal(row)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="delete" color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddUserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleOnSubmit}
        user={selectedUser}
      ></AddUserModal>
    </>
  );
}
