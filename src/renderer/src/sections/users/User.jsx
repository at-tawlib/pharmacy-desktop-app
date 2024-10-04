import {
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
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
import StatsCard from "../../components/stats-card";
import Scrollbar from "../../components/scrollbar";
import { medicines as sessions } from "../../mock/medicine";
import { useState } from "react";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableToolbar,
} from "../../components/table";
import { emptyRows } from "../../utils/table-filter";
import {
  ADD_MEDICINE_PATH,
  MEDICINE_PATH,
  USERS_PATH,
} from "../../constants/paths";
import { useRouter } from "../../routes/hooks/use-route";
import RouterLink from "../../routes/components/RouterLink";
import { userSession } from "../../mock/userSession";
import { orders } from "../../mock/orders";

export default function User() {
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Slice the medicines array to show the rows for the current page
  const paginatedSessions = userSession.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const paginatedSales = orders.slice(
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

  const handleClick = () => {
    router.push(MEDICINE_PATH);
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
            <Typography
              variant="h6"
              component={RouterLink}
              to={USERS_PATH}
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
              Users
            </Typography>
            <Typography variant="h6">User</Typography>
          </Breadcrumbs>

          <Typography variant="body1">User details.</Typography>
        </Stack>

        <Button variant="contained" color="inherit">
          Edit User
        </Button>
      </Stack>

      <Card component={Grid} container sx={{ p: 2, mb: 3 }}>
        <Grid item xs={6} p={2}>
          <Stack direction="row" gap={1}>
            <Typography variant="subtitle1">First Name: </Typography>
            <Typography variant="body1">John</Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} p={2}>
          <Stack direction="row" gap={1}>
            <Typography variant="subtitle1">Last Name:</Typography>
            <Typography variant="body1">Doe</Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} p={2}>
          <Stack direction="row" gap={1}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="body1">doe@email.com</Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} p={2}>
          <Stack direction="row" gap={1}>
            <Typography variant="subtitle1">Phone Number:</Typography>
            <Typography variant="body1">+235698 5878</Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} p={2}>
          <Stack direction="row" gap={1}>
            <Typography variant="subtitle1">Role:</Typography>
            <Typography variant="body1">Pharmacist</Typography>
          </Stack>
        </Grid>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Card>
            <Typography variant="subtitle1" p={2}>
              User Sales
            </Typography>
            <Scrollbar s={{ maxHeight: "auto" }}>
              <TableContainer sx={{ overflow: "unset" }}>
                <Table>
                  <TableHeadCustom
                    headLabel={[
                      { id: "order_id", label: "Order ID" },
                      { id: "date", label: "Date" },
                      { id: "items", label: "Items" },
                      { id: "price", label: "Total Price" },
                    ]}
                  />
                  <TableBody>
                    {paginatedSales.map((sale) => (
                      <TableRow key={sale.id} hover sx={{ cursor: "pointer" }}>
                        <TableCell>{sale.id}</TableCell>
                        <TableCell>{sale.date}</TableCell>
                        <TableCell>{sale.items_count}</TableCell>
                        <TableCell>{sale.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                  <TableEmptyRows
                    height={10}
                    emptyRows={emptyRows(page, rowsPerPage, orders.length)}
                  />

                  {/* TODO: TableNoData component for data not found */}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              component="div"
              count={orders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card>
            <Typography variant="subtitle1" p={2}>
              User Sessions
            </Typography>
            <Scrollbar s={{ maxHeight: "auto" }}>
              <TableContainer sx={{ overflow: "unset" }}>
                <Table>
                  <TableHeadCustom
                    headLabel={[
                      { id: "id", label: "ID" },
                      { id: "date", label: "Date" },
                    ]}
                  />
                  <TableBody>
                    {paginatedSessions.map((session) => (
                      <TableRow key={session.id} hover>
                        <TableCell>{session.id}</TableCell>
                        <TableCell>{session.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                  <TableEmptyRows
                    height={10}
                    emptyRows={emptyRows(page, rowsPerPage, sessions.length)}
                  />
                  {/* TODO: TableNoData component for data not found */}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              component="div"
              count={sessions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
