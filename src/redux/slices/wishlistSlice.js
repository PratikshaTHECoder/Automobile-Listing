import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const car = action.payload;
      if (!state.find(item => item.id === car.id)) {
        state.push(car);
      }
    },
    removeFromWishlist: (state, action) => {
      return state.filter(car => car.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
