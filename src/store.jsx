import { configureStore } from '@reduxjs/toolkit'
import cartStore from './reducers/CartStore'

export const store = configureStore({
  reducer: {
    cart: cartStore
  },
})