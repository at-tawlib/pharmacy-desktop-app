// CSS style object to visually hide an element while still making it accessible
export const visuallyHidden = {
  border: 0, // Remove border
  margin: -1, // Shift element slightly offscreen
  padding: 0, // Remove padding
  width: '1px', // Set width to 1px
  height: '1px', // Set height to 1px
  overflow: 'hidden', // Hide any content that exceeds the dimensions
  position: 'absolute', // Position element absolutely
  whiteSpace: 'nowrap', // Prevent line breaks within the content
  clip: 'rect(0 0 0 0)', // Clip the content to a 0x0 rectangle, effectively hiding it
};