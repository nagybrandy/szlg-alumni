// store/slices/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: typeof window !== "undefined" && localStorage.getItem('isLoggedIn') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      if (typeof window !== "undefined") {
        localStorage.setItem('isLoggedIn', 'true');
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem('isLoggedIn');
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
