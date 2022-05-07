import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token'),
        isLoggedIn: localStorage.getItem('isLoggedIn')
    },
    reducers: {
        login(state, action) {
            state.token = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('token', state.token);
            localStorage.setItem('isLoggedIn', state.isLoggedIn);
        },
        logout(state) {
            state.token = '';
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn', state.isLoggedIn);
        }
    }

})
export const userActions = userSlice.actions;
export default userSlice;