import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { INVENTORY_PATH } from "../../constants/paths";
import SummaryCard from "../../components/summary-card";
import RouterLink from "../../routes/components";

export default function Medicine() {
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
            <Typography variant="h6">Medicine</Typography>
          </Breadcrumbs>

          <Typography variant="body1">
            List of medicines available in the inventory
          </Typography>
        </Stack>

        <Button variant="contained" color="inherit">
          Edit Detail
        </Button>
      </Stack>

      <Grid container spacing={3} direction="row">
        <SummaryCard
          title="Medicine"
          stats={[
            { value: 298, label: "Medicine ID" },
            { value: 24, label: "Medicine Group" },
          ]}
        />

        <SummaryCard
          title="Inventory in Qty."
          stats={[
            { value: 7025, label: "Lifetime Supply" },
            { value: 525, label: "Lifetime Sales" },
            { value: 8, label: "Stock left" },
          ]}
        />
      </Grid>

      <Box mt={5} />

      <SummaryCard
        title="How to use"
        stats={[
          {
            label:
              "Take this medication by mouth with or without food as directed by your doctor, usually once daily.",
          },
        ]}
      />

      <Box mt={5} />

      <SummaryCard
        title="Possible side effects"
        stats={[
          { label: "Dizziness, lightheadedness, drowsiness, nausea, vomiting" },
        ]}
      />

      <Box mt={5} />
      <Button variant="contained" size="large" color="error">
        Delete Medicine
      </Button>
    </Container>
  );
}
