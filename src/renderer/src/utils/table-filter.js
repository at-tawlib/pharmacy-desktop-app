// Calculates empty rows for pagination.
// Parameters: page (current page number), rowsPerPage (rows per page), arrayLength (total items).
// Returns: Number of empty rows for the last page.
export function emptyRows(page, rowsPerPage, arrayLength) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

// Comparator for descending order sorting by a specified property.
// Params: a (first object), b (second object), orderBy (property).
// Returns: 1 if b[orderBy] < a[orderBy], -1 if b[orderBy] > a[orderBy],
// 0 if they are equal. Handles null values by treating them as greater.
function descendingComparator(a, b, orderBy) {
  if (a[orderBy] === null) return 1;
  if (b[orderBy] === null) return -1;
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

// Returns a comparator function for sorting objects based on order ('asc' or 'desc') and property to sort by.
// Params: order (sorting order), orderBy (property to sort by).
// Returns: Comparator function for sorting objects.
export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Applies filtering and sorting to input data based on provided parameters.
// Params: inputData (array of objects), comparator (sorting function), filterName (optional filter string).
// Returns: Filtered and sorted array of objects.
export function applyFilter({ inputData, comparator, filterName }) {
  // Stabilize array to prevent re-ordering of elements with equal values during sorting
  const stabilizedThis = inputData.map((el, index) => [el, index]);

  // Sort the stabilized array using the provided comparator function
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  // Map the sorted elements back to their original form
  inputData = stabilizedThis.map((el) => el[0]);

  // Map the sorted elements back to their original form
  if (filterName) {
    inputData = inputData.filter(
      (user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return inputData;
}
