import PropTypes from 'prop-types';
import Iconify from '.';

/**
 * Reusable Icon component
 *
 * @param {string} icon - The icon identifier string (e.g., 'eva:trash-2-outline').
 * @param {string} [color='inherit'] - The color of the icon. Defaults to 'inherit'.
 * @param {number} [size=24] - The size of the icon. Defaults to 24.
 *
 * @returns {JSX.Element} The rendered icon.
 */
const Icon = ({ icon, color = 'inherit', size = 24, ...otherProps }) => (
  <Iconify icon={icon} color={color} width={size} height={size} {...otherProps} />
);

export const TrashIcon = (props) => <Icon icon="eva:trash-2-outline" {...props} />;
export const EditIcon = (props) => <Icon icon="eva:edit-outline" {...props} />;
export const SearchIcon = (props) => <Icon icon="eva:search-outline" {...props} />;
export const HomeIcon = (props) => <Icon icon="eva:home-outline" {...props} />;
export const FilterIcon = (props) => <Icon icon="ic:round-filter-list" {...props} />;
export const VisibleFilled = (props) => <Icon icon="bitcoin-icons:visible-filled" {...props} />;
export const PlusIcon = (props) => <Icon icon="eva:plus-fill" {...props} />;
export const CloseIcon = (props) => <Icon icon="eva:close-outline" {...props} />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};
