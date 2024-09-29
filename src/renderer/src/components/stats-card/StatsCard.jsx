import {
  Card,
  CardActions,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";

/**
 * StatsCard is a reusable component that displays a summary of information
 * inside a Material-UI Card. It includes an icon, a title, a value, and
 * an action button that spans the full width of the card.
 *
 * @component
 * @example
 * <StatsCard
 *   icon={LocalHospital}
 *   title="Total Items"
 *   value="100"
 *   borderColor="blue"
 *   cardActionText="View Detailed Report"
 * />
 *
 * @param {Object} props - Props for the StatsCard component.
 * @param {React.ElementType} props.icon - A Material-UI icon component (e.g., LocalHospital).
 * @param {string} props.title - The title text displayed in the card.
 * @param {string | number} props.value - The value displayed below the title.
 * @param {string} [props.borderColor='blue'] - The color of the card's outline border and the CardActions background.
 * @param {string} [props.cardActionText='View Detailed Report'] - The text displayed in the CardActions button.
 *
 * @returns {JSX.Element} A styled Material-UI card displaying an icon, title, value, and a full-width action button.
 */
const StatsCard = ({
  title,
  subtext,
  borderColor = "blue",
  cardActionText = "View Detailed Report",
}) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card variant="outlined" sx={{ borderColor, borderRadius: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stack direction="column" spacing={1} alignItems="center" p={2}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{subtext}</Typography>
          </Stack>

          <Button
            sx={{
              backgroundColor: borderColor,
              px: 0,
              py: 1,
              width: "100%",
              justifyContent: "center",
              color: "white",
              borderRadius: 0,
            }}
          >
            {cardActionText}
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default StatsCard;
