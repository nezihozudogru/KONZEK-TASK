import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        ...action.payload,
        cartId: Date.now()
      });
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.cartId !== action.payload.cartId);
      state.totalItems -= 1;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
