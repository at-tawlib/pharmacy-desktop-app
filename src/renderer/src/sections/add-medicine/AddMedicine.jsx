import {
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { INVENTORY_PATH } from "../../constants/paths";
import RouterLink from "../../routes/components";

export default function AddMedicine() {
  const theme = useTheme();

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
            <Typography variant="h6">Add Medicine</Typography>
          </Breadcrumbs>

          <Typography variant="body1">
            List of medicines available in the inventory
          </Typography>
        </Stack>
      </Stack>

      <Card sx={{ p: 3, mb: 5 }}>
        <form>
          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Medicine Name"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="group"
                value="Oral"
                select
                label="Medicine group"
                required
                variant="outlined"
                fullWidth
              >
                {["Oral", "Injection", "Tablet", "Capsule"].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="quantity"
                label="Quantity"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                label="Price"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="supplier"
                label="Supplier"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="expiry"
                label="Expiry Date"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />

          <TextField
            name="prescription"
            label="Prescription"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />

          <TextField
            name="side_effects"
            label="Possible Side effects"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />
        </form>
      </Card>

      <Button variant="contained" size="large" color="inherit">
        Add Medicine
      </Button>
    </Container>
  );
}
