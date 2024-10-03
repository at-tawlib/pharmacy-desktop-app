import {
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Select,
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
import {
  MEDICINE_GROUP_ITEM_PATH,
} from "../../constants/paths";
import { useRouter } from "../../routes/hooks/use-route";
import RouterLink from "../../routes/components/RouterLink";
import { medicineGroup } from "../../mock/medicine-group";
import { REPORTS_PATH } from "../../constants/paths";

export default function SalesReport() {
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Slice the medicines array to show the rows for the current page
  const paginatedGroups = medicineGroup.slice(
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
            <Select
              variant="standard"
              defaultValue="today"
              fullWidth
              size="small"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last-7-days">Last 7 days</option>
              <option value="last-30-days">Last 30 days</option>
            </Select>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack direction="column" alignItems="start">
            <Typography variant="body2">Medicine Group</Typography>
            <TextField
              name="group"
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
            <Select
              variant="standard"
              defaultValue="today"
              fullWidth
              size="small"
            >
              <MenuItem value="">Ali Baba</MenuItem>
              <MenuItem value="">John Doe</MenuItem>
              <MenuItem value="">Azindo</MenuItem>
              <MenuItem value="">Kofi Baaboni</MenuItem>
            </Select>
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={5}>
        <Grid item xs={12} sm={6} md={3}>
         
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={5}>
        <Grid item xs={6}></Grid>

        <Grid item xs={6}>
          <Card>
            <Scrollbar s={{ maxHeight: "auto" }}>
              <TableContainer sx={{ overflow: "unset" }}>
                <Table>
                  <TableHeadCustom
                    headLabel={[
                      { id: "order_id", label: "Order ID" },
                      { id: "date", label: "Date" },
                      { id: "price", label: "Total Price" },
                    ]}
                  />
                  <TableBody>
                    {paginatedGroups.map((group) => (
                      <TableRow
                        key={group.id}
                        hover
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          router.push(MEDICINE_GROUP_ITEM_PATH);
                        }}
                      >
                        <TableCell>{group.group_name}</TableCell>
                        <TableCell>{group.description}</TableCell>
                        <TableCell>{group.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                  <TableEmptyRows
                    height={10}
                    emptyRows={emptyRows(
                      page,
                      rowsPerPage,
                      medicineGroup.length
                    )}
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
        </Grid>
      </Grid>
    </Container>
  );
}
