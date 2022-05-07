import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        totalBooks: 0
    },
    reducers: {
        viewAllBooks(state, action) {
            state.books = action.payload;
        },
        getTotalBooks(state, action) {
            state.totalBooks = action.payload;
        }
    }
})



export const bookActions = bookSlice.actions;
export default bookSlice;