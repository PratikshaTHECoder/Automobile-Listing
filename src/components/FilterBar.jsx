import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCars, resetFilter } from '../redux/slices/carsSlice';
import { TextField, Button, Box } from '@mui/material';

const FilterBar = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState('');

  const handleFilter = () => {
    dispatch(
      filterCars({
        price: price ? parseInt(price) : null,
        mileage: mileage ? parseInt(mileage) : null
      })
    );
  };

  const handleReset = () => {
    setPrice('');
    setMileage('');
    dispatch(resetFilter());
  };

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
        <TextField
          label="Max Price"
          variant="outlined"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Mileage Upto(km/l)"
          variant="outlined"
          type="number"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
        <Button variant="contained" onClick={handleFilter}>
          Apply Filter
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default FilterBar;
