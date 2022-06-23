import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItem: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const order = state.items.find(
        (o) => o.item.id === action.payload.item.id
      );
      if (order) {
        order.quantity += 1;
        state.totalItem += 1;
        state.totalAmount += order.item.price;
      } else {
        state.items.push(action.payload);
        state.totalItem += 1;
        state.totalAmount += action.payload.item.price;
      }
    },
    incrementQuantity(state, action) {
      state.items.map((order) => {
        if (order.id === action.payload.id) order.quantity += 1;
      });
      state.totalItem += 1;
      state.totalAmount += action.payload.item.price;
    },
    decrementQuantity(state, action) {
      state.items.map((order) => {
        if (order.id === action.payload.id)
          if (order.quantity === 1) {
            state.items = state.items.filter((o) => o.id != order.id);
          }
          else{
              order.quantity -= 1;
          }
      });
      state.totalItem -= 1;
      state.totalAmount -= action.payload.item.price;
    },
    checkOut(state,actions){
        state.items = [];
        state.totalItem = 0;
        state.totalAmount = 0;
    },
    viewAllitems(state, action) {
      state.items = action.payload;
    },
    getTotalItems(state, action) {
      state.totalItem = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
