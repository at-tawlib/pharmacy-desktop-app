import SimpleBar from 'simplebar-react';

import { alpha, styled } from '@mui/material/styles';

/**
 * Custom styling for scrollbars using the SimpleBar library and Material-UI's styled components.
 * This module provides styled components for root scrollbars and nested scrollbars.
 */
export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));
