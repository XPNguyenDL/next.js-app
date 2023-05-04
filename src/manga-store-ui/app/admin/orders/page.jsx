import OrderManager from '@/src/components/Admin/Orders/OrderManager'
import React from 'react'

export default function page() {
  return (
    <div className="mt-16 container mx-auto">
      <div>
        <h1 className='text-xl font-bold'>Thông tin đơn hàng</h1>
      </div>
      <OrderManager />
    </div>
  )
}
