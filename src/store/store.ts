'use client';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';  // Import from '@reduxjs/toolkit/query/react'
import { apiSlice } from './services/apiSlice';  // Adjust the import path as necessary
import authReducer from './services/authSlice'; // Adjust the import path as necessary

export const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Add the auth reducer to the store
    auth: authReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Export the RootState type to be used in selectors
export type RootState = ReturnType<typeof store.getState>;

// Export the AppDispatch type to be used in dispatch
export type AppDispatch = typeof store.dispatch;

// Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export default store;
