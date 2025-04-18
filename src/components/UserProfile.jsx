import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/slices/userSlice';
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  Stack
} from '@mui/material';

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    dispatch(updateUser({ name, email }));
    setEditMode(false);
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            User Profile
          </Typography>

          {!editMode ? (
            <Stack spacing={2} mt={2}>
              <Box>
                <Typography variant="subtitle2">Name:</Typography>
                <Typography variant="body1">{user.name}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">Email:</Typography>
                <Typography variant="body1">{user.email}</Typography>
              </Box>
            </Stack>
          ) : (
            <Box mt={2}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
          )}
        </CardContent>

        <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
          {!editMode ? (
            <Button variant="outlined" onClick={() => setEditMode(true)}>
              Edit
            </Button>
          ) : (
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default UserProfile;
