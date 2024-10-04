import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const AddUserDialog = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddGroup = async () => {
    console.log("Add User");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          value={formData.firstName}
          fullWidth
          sx={{ mb: 2, mt: 1 }}
        />

        <TextField
          label="Last Name"
          value={formData.lastName}
          fullWidth
          sx={{ mb: 2, mt: 1 }}
        />

        <TextField
          label="Email"
          value={formData.email}
          fullWidth
          sx={{ mb: 2, mt: 1 }}
        />

        <TextField
          label="Phone Number"
          value={formData.phone}
          fullWidth
          sx={{ mb: 2, mt: 1 }}
        />

        <TextField
          name="role"
          value="Admin"
          select
          label="Role"
          required
          variant="outlined"
          fullWidth
          sx={{ mb: 2, mt: 1 }}
        >
          {["Admin", "Pharmacist"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Default Password"
          value={formData.password}
          fullWidth
          sx={{ mb: 2, mt: 1 }}
        />

        {error && <Typography color="error">{error}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddGroup} color="primary" disabled={loading}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
