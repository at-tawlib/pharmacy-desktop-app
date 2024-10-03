import {
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Scrollbar from "../../components/scrollbar";
import { useState } from "react";
import { TableEmptyRows, TableHeadCustom } from "../../components/table";
import { emptyRows } from "../../utils/table-filter";
import { useRouter } from "../../routes/hooks/use-route";
import RouterLink from "../../routes/components/RouterLink";
import { medicineGroup } from "../../mock/medicine-group";
import { REPORTS_PATH } from "../../constants/paths";
import { orders } from "../../mock/orders";

export default function SalesReport() {
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Slice the order array to show the rows for the current page
  const paginatedGroups = orders.slice(
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

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Stack direction="column">
          {/* TODO: extract bread crumbs */}
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
              to={REPORTS_PATH}
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
              Reports
            </Typography>
            <Typography variant="h6">Sales Report</Typography>
          </Breadcrumbs>

          <Typography variant="body1">
            Sales related report of the pharmacy.
          </Typography>
        </Stack>

        <Button variant="contained" color="inherit">
          Download Report
        </Button>
      </Stack>

      <Grid container spacing={2} mb={5}>
        <Grid item xs={4}>
          <Stack direction="column" alignItems="start">
            <Typography variant="body2">Date Range</Typography>
            <TextField
              name="date"
              value="Today"
              select
              size="small"
              required
              variant="standard"
              fullWidth
            >
              {["Today", "Yesterday", "Last 7 days", "Last 30 days"].map(
                (option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack direction="column" alignItems="start">
            <Typography variant="body2">Medicine Group</Typography>
            <TextField
              name="type"
              value="Oral"
              select
              size="small"
              required
              variant="standard"
              fullWidth
            >
              {["Oral", "Injection", "Tablet", "Capsule"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack direction="column" alignItems="start">
            <Typography variant="body2">Username</Typography>
            <TextField
              name="user"
              value="Ali Baba"
              select
              size="small"
              required
              variant="standard"
              fullWidth
            >
              {["Ali Baba", "Azindo Tawlib", "John Doe", "Burburn"].map(
                (option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
          </Stack>
        </Grid>
      </Grid>

      <Card>
        <Scrollbar s={{ maxHeight: "auto" }}>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table>
              <TableHeadCustom
                headLabel={[
                  { id: "order_id", label: "Order ID" },
                  { id: "date", label: "Date" },
                  { id: "price", label: "Total Price" },
                  { id: "items", label: "Items" },
                  { id: "user", label: "Pharmacist" },
                ]}
              />
              <TableBody>
                {paginatedGroups.map((group) => (
                  <TableRow key={group.id} hover sx={{ cursor: "pointer" }}>
                    <TableCell>{group.id}</TableCell>
                    <TableCell>{group.date}</TableCell>
                    <TableCell>{group.price}</TableCell>
                    <TableCell>{group.items_count}</TableCell>
                    <TableCell>{group.user}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableEmptyRows
                height={10}
                emptyRows={emptyRows(page, rowsPerPage, medicineGroup.length)}
              />

              {/* TODO: TableNoData component for data not found */}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          count={medicineGroup.length}
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
