import { createSlice } from '@reduxjs/toolkit';
import carsData from '../../data/cars';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    allCars: carsData,
    filteredCars: carsData,
  },
  reducers: {
    filterCars: (state, action) => {
      const { mileage, price } = action.payload;
      state.filteredCars = state.allCars.filter(car => {
        return (!mileage || car.mileage <= mileage) &&
               (!price || car.price <= price);
      });
    },
    resetFilter: (state) => {
      state.filteredCars = state.allCars;
    },
  },
});

export const { filterCars, resetFilter } = carsSlice.actions;
export default carsSlice.reducer;
