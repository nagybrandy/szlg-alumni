'use client';
import { store } from "./../store/store.ts"
import React from 'react'
import { Provider } from 'react-redux';

const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers
