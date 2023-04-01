"use client"

import React from 'react'
import CartSection from './CartSection'
import { Provider } from 'react-redux'
import { store } from '@/src/store'

export default function CartReduce() {
  return (
    <Provider store={store}>
      <CartSection />
    </Provider>
  )
}
