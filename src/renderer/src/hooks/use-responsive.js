import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Custom hook to handle responsive behavior using Material-UI breakpoints.
 * @param {string} query - The type of media query to check ('up', 'down', 'between', 'only').
 * @param {string} start - The starting breakpoint to query.
 * @param {string} end - The ending breakpoint to query (only used for 'between' queries).
 * @returns {boolean} The result of the media query based on the provided parameters.
 */
export function useResponsive(query, start, end) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

/**
 * Custom hook to determine the current viewport width based on Material-UI breakpoints.
 * @returns {string} The current viewport width ('xs', 'sm', 'md', 'lg', 'xl').
 */
export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
