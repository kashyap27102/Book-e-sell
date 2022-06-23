import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: localStorage.getItem('id'),
        token: localStorage.getItem('token'),
        isLoggedIn: localStorage.getItem('isLoggedIn'),
        orders:[]
    },
    reducers: {
        login(state, action) {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            localStorage.setItem('id', state.id);
            localStorage.setItem('token', state.token);
            localStorage.setItem('isLoggedIn', state.isLoggedIn);
        },
        logout(state) {
            state.id='';
            state.token = '';
            state.isLoggedIn = false;
            localStorage.removeItem('id');
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn', state.isLoggedIn);
        },
        AddOrder(state,action){
            state.orders.push(action.payload);
        }
    }

})
export const userActions = userSlice.actions;
export default userSlice;