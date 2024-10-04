import {
  Breadcrumbs,
  Button,
  Card,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Scrollbar from "../components/scrollbar";
import { useState } from "react";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableToolbar,
} from "../components/table";
import { emptyRows } from "../utils/table-filter";
import { INVENTORY_PATH, MEDICINE_GROUP_ITEM_PATH, USERS_PATH } from "../constants/paths";
import { useRouter } from "../routes/hooks/use-route";
import RouterLink from "../routes/components/RouterLink";
import { users } from "../mock/users";
import { AddUserDialog } from "../components/dialogs";

export default function UsersList() {
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Slice the medicines array to show the rows for the current page
  const paginatedUsers = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  const handleClose = () => setOpen(false);

  const handleClick = () => {
    router.push(MEDICINE_GROUP_ITEM_PATH);
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Stack direction="column">
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                  color: "primary.main",
                },
              }}
              color="inherit"
              noWrap
            >
              Home
            </Typography>
            <Typography variant="h6">Users</Typography>
          </Breadcrumbs>

          <Typography variant="body1">List of users and roles.</Typography>
        </Stack>

        <Button
          variant="contained"
          color="inherit"
          onClick={() => setOpen(true)}
        >
          Add New User
        </Button>
      </Stack>

      <Card>
        <TableToolbar numSelected={0} title="Medicine Groups" />

        <Scrollbar s={{ maxHeight: "auto" }}>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table>
              <TableHeadCustom
                headLabel={[
                  { id: "id", label: "Name" },
                  { id: "name", label: "Name" },
                  { id: "email", label: "Email" },
                  { id: "phone", label: "Phone Number" },
                  { id: "role", label: "Role" },
                ]}
              />
              <TableBody>
                {paginatedUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    hover
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      router.push(MEDICINE_GROUP_ITEM_PATH);
                    }}
                  >
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      {user.firstName} {user.lastName}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell />
                  </TableRow>
                ))}
              </TableBody>

              <TableEmptyRows
                height={10}
                emptyRows={emptyRows(page, rowsPerPage, users.length)}
              />

              {/* Add Group Dialog */}
              <AddUserDialog open={open} onClose={handleClose} />
              {/* TODO: TableNoData component for data not found */}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </Container>
  );
}
