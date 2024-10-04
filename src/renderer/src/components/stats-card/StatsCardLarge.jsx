import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
  Icon,
} from "@mui/material";
import MoneyIcon from "@mui/icons-material/Money";

export const StatsCardLarge = ({ title, value, bg = "blue", icon }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ borderRadius: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            height: 100,
            background: bg,
            p: 2,
          }}
        >
          <Stack direction="column" alignItems="start" gap={1}>
            <Typography variant="subtitle1" color="white">
              {title}
            </Typography>
            <Typography variant="caption" color="white">
              Report
            </Typography>
          </Stack>

          <Stack direction="column" alignItems="end" gap={1}>
            <Icon sx={{ color: "white"}}>
              <MoneyIcon />
            </Icon>
            <Typography variant="h6" color="white">
              {value}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
};
