import {
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
import { medicines } from "../../mock/medicine";
import { useState } from "react";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableToolbar,
} from "../../components/table";
import { emptyRows } from "../../utils/table-filter";

export default function Inventory() {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Slice the medicines array to show the rows for the current page
  const paginatedMedicines = medicines.slice(
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
          <Typography variant="h4">Inventory</Typography>
          <Typography variant="body1">
            List of medicines available in the inventory
          </Typography>
        </Stack>

        <Button variant="contained" color="inherit">
          Add New Medicine
        </Button>
      </Stack>

      <Grid container spacing={3} direction="row" mb={4}>
        <StatsCard
          title="300"
          subtext="Medicines Available"
          borderColor="blue"
          cardActionText="View Detailed Report"
        />

        <StatsCard
          title="02"
          subtext="Medicine Groups"
          borderColor="green"
          cardActionText="View Detailed Report"
        />

        <StatsCard
          title="05"
          subtext="Medicine Shortage"
          borderColor="red"
          cardActionText="View Detailed Report"
        />
      </Grid>

      <Card>
        <TableToolbar numSelected={0} title="Medicines" />

        <Scrollbar s={{ maxHeight: "auto" }}>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table>
              <TableHeadCustom
                headLabel={[
                  { id: "medication_name", label: "Medicine Name" },
                  { id: "category", label: "Category" },
                  { id: "price", label: "Price" },
                  { id: "quantity", label: "Stock" },
                  { id: "expiration_date", label: "Expiry Date" },
                ]}
              />
              <TableBody>
                {paginatedMedicines.map((medicine) => (
                  <TableRow key={medicine.id}>
                    <TableCell>{medicine.medication_name}</TableCell>
                    <TableCell>{medicine.category}</TableCell>
                    <TableCell>{medicine.price}</TableCell>
                    <TableCell>{medicine.quantity}</TableCell>
                    <TableCell>{medicine.expiration_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              
              <TableEmptyRows
                height={10}
                emptyRows={emptyRows(page, rowsPerPage, medicines.length)}
              />
              {/* TODO: TableNoData component for data not found */}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          count={medicines.length}
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
