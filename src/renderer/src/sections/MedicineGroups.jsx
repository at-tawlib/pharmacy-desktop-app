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
  ADD_MEDICINE_PATH,
  INVENTORY_PATH,
  MEDICINE_PATH,
} from "../constants/paths";
import { useRouter } from "../routes/hooks/use-route";
import RouterLink from "../routes/components/RouterLink";
import { medicineGroup } from "../mock/medicine-group";

export default function MedicineGroup() {
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
            <Typography variant="h6">Medicine Groups</Typography>
          </Breadcrumbs>

          <Typography variant="body1">
            List of medicine groups.
          </Typography>
        </Stack>

        <Button variant="contained" color="inherit">
          Add New Group
        </Button>
      </Stack>

      <Card>
        <TableToolbar numSelected={0} title="Medicine Groups" />

        <Scrollbar s={{ maxHeight: "auto" }}>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table>
              <TableHeadCustom
                headLabel={[
                  { id: "group_name", label: "Group Name" },
                  { id: "description", label: "Description" },
                  { id: "quantity", label: "No. of Medicines" },
                  { id: "action", label: "Action" },
                ]}
              />
              <TableBody>
                {paginatedGroups.map((group) => (
                  <TableRow
                    key={group.id}
                    hover
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      router.push(MEDICINE_PATH);
                    }}
                  >
                    <TableCell>{group.group_name}</TableCell>
                    <TableCell>{group.description}</TableCell>
                    <TableCell>{group.quantity}</TableCell>
                    <TableCell />
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
