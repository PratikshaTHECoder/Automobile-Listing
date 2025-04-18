import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist
} from '../redux/slices/wishlistSlice';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box
} from '@mui/material';

const CarList = () => {
  const cars = useSelector((state) => state.cars.filteredCars);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const isInWishlist = (carId) => wishlist.some((car) => car.id === carId);

  return (
    <Box padding={2} display="flex" justifyContent="center">
      <Box sx={{ maxWidth: 1200, width: '100%' }}>
        {cars.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={200}>
            <Typography variant="h6" color="textSecondary">
              No cars found for the selected criteria.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3} justifyContent="flex-start">
            {cars.map((car) => (
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
                  <Box p={2} display="flex" gap={1}>
                    {isInWishlist(car.id) ? (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled
                          sx={{ flex: 1, height: 40, fontSize: 12, fontWeight: 600 }}
                        >
                          Added to Wishlist
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          sx={{ height: 40 }}
                          onClick={() => dispatch(removeFromWishlist(car.id))}
                        >
                          Remove
                        </Button>
                      </>
                    ) : (
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ height: 40 }}
                        onClick={() => dispatch(addToWishlist(car))}
                      >
                        Add to Wishlist
                      </Button>
                    )}
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

export default CarList;
