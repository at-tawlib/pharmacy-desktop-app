import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * A custom router link component that wraps React Router's Link component.
 * @param {object} props - The props for the RouterLink component.
 * @param {string} props.href - The URL path to navigate to.
 * @returns {JSX.Element} The JSX element representing the RouterLink component.
 */
const RouterLink = forwardRef(({ href, ...other }, ref) => <Link ref={ref} to={href} {...other} />);

RouterLink.propTypes = {
  href: PropTypes.string,
};

export default RouterLink;
