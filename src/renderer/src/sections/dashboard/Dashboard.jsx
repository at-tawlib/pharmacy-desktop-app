import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import SummaryCard from "../../components/summary-card";
import StatsCard, { StatsCardLarge } from "../../components/stats-card";
import MoneyIcon from "@mui/icons-material/Money";

export default function Dashboard() {
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
          <Typography variant="h4">Dashboard</Typography>
          <Typography variant="body1">
            A quick data overview of the inventory
          </Typography>
        </Stack>

        <Button variant="contained" color="inherit">
          More
        </Button>
      </Stack>

      <Grid container spacing={3} direction="row" mb={4}>
        <StatsCard
          title="Good"
          subtext="Inventory Status"
          borderColor="green"
          cardActionText="View Detailed Report"
        />

        <StatsCard
          title="GHS. 1000"
          subtext="Revenue: Jan 2024"
          borderColor="blue"
          cardActionText="View 7Detailed Report"
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

      <Grid container spacing={3} direction="row" mb={4}>
        <StatsCardLarge title="Medicines" value="3" bg="green" />
        <StatsCardLarge title="Sales of Day" value="3000" bg="blue" />
        <StatsCardLarge title="Sales of Month" value="5400" bg="pink" />

        <StatsCardLarge title="Stock Shortage" value="10" bg="red" />
        <StatsCardLarge title="Expired Products" value="4" bg="black" />
        <StatsCardLarge title="Near Expiry" value="12" bg="brown" />
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
