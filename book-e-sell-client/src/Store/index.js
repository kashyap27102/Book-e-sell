import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book-slice";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;