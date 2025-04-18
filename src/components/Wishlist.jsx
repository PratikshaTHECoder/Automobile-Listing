import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box
} from '@mui/material';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <Box padding={2} display="flex" justifyContent="center">
      <Box sx={{ maxWidth: 1200, width: '100%' }}>
        {wishlist.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={200}>
            <Typography variant="h6" color="textSecondary">
              Your wishlist is empty.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3} justifyContent="flex-start">
            {wishlist.map((car) => (
              <Grid item key={car.id}>
                <Card
                  sx={{
                    width: 280,
                    height: 360,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 3
                  }}
                >
                  <CardMedia
                    component="img"
                    image={car.image}
                    alt={car.name}
                    sx={{
                      height: 180,
                      objectFit: 'cover'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {car.name}
                    </Typography>
                    <Typography variant="body2">
                      Mileage: {car.mileage} km/l
                    </Typography>
                    <Typography variant="body2">
                      Price: $ {car.price}
                    </Typography>
                  </CardContent>
                  <Box p={2}>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      sx={{ height: 40, fontWeight: 600 }}
                      onClick={() => dispatch(removeFromWishlist(car.id))}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Wishlist;
