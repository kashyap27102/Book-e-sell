import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        orders: [],
        totalItem: 0,
        totalAmount: 0,
    },
    reducers: {
        viewAllOrders(state, action) {
            state.orders = action.payload;
        },
        getTotalItems(state, action) {
            state.totalItem = action.payload;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;