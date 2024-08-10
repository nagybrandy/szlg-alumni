// store/slices/authSlice.js
'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: typeof window !== "undefined" && localStorage.getItem('isLoggedIn') === 'true',
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, {payload}) {
      state.isLoggedIn = true;
      state.token = payload.token;
      console.log(payload.token)
      if (typeof window !== "undefined") {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', payload.token);
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
