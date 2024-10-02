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
import {
  INVENTORY_PATH,
  MEDICINE_GROUP_PATH,
} from "../constants/paths";
import { useRouter } from "../routes/hooks/use-route";
import RouterLink from "../routes/components/RouterLink";
import { medicines } from "../mock/medicine";

export default function MedicineGroupItems() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Slice the medicines array to show the rows for the current page
  const reducedMedicines = medicines.slice(0, 5);
  const paginatedMedicines = reducedMedicines.slice(
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
              to={INVENTORY_PATH}
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
              Inventory
            </Typography>
            <Typography
              variant="h6"
              component={RouterLink}
              to={MEDICINE_GROUP_PATH}
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
              Medicine Groups
            </Typography>
            <Typography variant="h6">Group 1</Typography>
          </Breadcrumbs>

          <Typography variant="body1">
            List of medicines in medicine group.
          </Typography>
        </Stack>

        <Button variant="contained" color="inherit">
          Add Medicine to Group
        </Button>
      </Stack>

      <Card>
        <TableToolbar numSelected={0} title="Medicine Group 1" />

        <Scrollbar s={{ maxHeight: "auto" }}>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table>
              <TableHeadCustom
                headLabel={[
                  { id: "medicine", label: "Medicine" },
                  { id: "price", label: "Price" },
                  { id: "stock", label: "Stock" },
                  { id: "action", label: "Action" },
                ]}
              />
              <TableBody>
                {paginatedMedicines.map((item) => (
                  <TableRow key={item.id} hover sx={{ cursor: "pointer" }}>
                    <TableCell>{item.medication_name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <Button variant="text" sx={{ p: 0 }}>
                        Remove from group
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableEmptyRows
                height={10}
                emptyRows={emptyRows(page, rowsPerPage, reducedMedicines.length)}
              />
              {/* TODO: TableNoData component for data not found */}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          count={reducedMedicines.length}
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
