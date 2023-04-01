import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/CartStore'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})