import {
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import SummaryCard from "../../components/summary-card";
import StatsCard from "../../components/stats-card";

export default function Reports() {
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
          <Typography variant="h4">Reports</Typography>
          <Typography variant="body1">
            Overall reports related to the pharmacy.
          </Typography>
        </Stack>
      </Stack>

      <Grid container spacing={3} direction="row" mb={4}>
        <StatsCard
          title="GHs. 1000"
          subtext="Total Sales Revenue"
          borderColor="green"
          cardActionText="View Detailed Report"
        />

        <StatsCard
          title="523"
          subtext="Payment Report"
          borderColor="blue"
          cardActionText="View Detailed Report"
        />

        <StatsCard
          title="300"
          subtext="Medicines Available"
          borderColor="yellow"
          cardActionText="View Detailed Report"
        />

        <StatsCard
          title="05"
          subtext="Medicine Shortage"
          borderColor="red"
          cardActionText="View Detailed Report"
        />
      </Grid>

      <Grid container spacing={3} direction="row">
        <SummaryCard
          title="Inventory"
          actionText="Go to Configuration"
          stats={[
            { value: 298, label: "Total number of medicines" },
            { value: 24, label: "Medicine Groups" },
          ]}
        />

        <SummaryCard
          title="Quick Report"
          actionText="January 2024"
          stats={[
            { value: 7025, label: "Qty of Medicines sold" },
            { value: 525, label: "Invoices Generated" },
          ]}
        />

        <SummaryCard
          title="My Pharmacy"
          actionText="Go to Configuration"
          stats={[
            { value: 298, label: "Total no of Suppliers" },
            { value: 24, label: "Total number of users" },
          ]}
        />

        <SummaryCard
          title="Customers"
          actionText="Go to Configuration"
          stats={[
            { value: 878, label: "Total number of Customers" },
            { value: 24, label: "Frequently Bought Item" },
          ]}
        />
      </Grid>
    </Container>
  );
}
