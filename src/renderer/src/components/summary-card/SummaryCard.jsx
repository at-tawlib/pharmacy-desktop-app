import { Card, Stack, Typography, Divider, Grid } from "@mui/material";

/**
 * SummaryCard is a reusable component that displays statistical information
 * in a Material-UI Card with a title, action text, and dynamic stats.
 *
 * @component
 * @example
 * <SummaryCard
 *   title="Inventory"
 *   actionText="Go to Configuration"
 *   stats={[
 *     { value: 298, label: 'Total number of medicines' },
 *     { value: 24, label: 'Medicine Groups' }
 *   ]}
 * />
 *
 * @param {Object} props - Props for the SummaryCard component.
 * @param {string} props.title - The title displayed at the top of the card.
 * @param {string} props.actionText - The action text displayed to the right of the title.
 * @param {Array<{value: number|string, label: string}>} props.stats - An array of objects containing a value and label for each stat.
 *
 * @returns {JSX.Element} A styled Material-UI card displaying a title, action text, and a list of stats.
 */
const SummaryCard = ({ title, actionText, stats }) => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 1,
          borderColor: (theme) => theme.palette.grey[500],
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={2}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{actionText}</Typography>
        </Stack>
        <Divider sx={{ color: (theme) => theme.palette.grey[500] }} />

        <Stack direction="row" spacing={2} p={2}>
          {stats.map((stat, index) => (
            <Stack key={index} direction="column" spacing={1} p={2}>
              <Typography variant="h5">{stat.value}</Typography>
              <Typography variant="body1">{stat.label}</Typography>
            </Stack>
          ))}
        </Stack>
      </Card>
    </Grid>
  );
};

export default SummaryCard;
