import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'Phone', price: 699 }
    ],
    loading: false,
    error: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
