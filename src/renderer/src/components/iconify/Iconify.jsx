import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

/**
 * A custom component for rendering icons using Iconify.
 * This component wraps the Icon component from the Iconify library and provides additional props for customization.
 * @param {object} props - The props for the Iconify component.
 * @param {string | object} props.icon - The icon to be rendered. This can be either an icon object or a string representing the icon.
 * @param {number} [props.width=20] - The width of the icon.
 * @param {object} [props.sx] - Additional styles to apply to the icon.
 * @param {object} other - Additional props to pass to the underlying Box component.
 * @returns {JSX.Element} The JSX element representing the Iconify component.
 */
const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
