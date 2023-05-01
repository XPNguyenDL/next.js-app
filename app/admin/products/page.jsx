import FilterForm from '@/src/components/Admin/FilterForm'
import React from 'react'

export default function page() {
  return (
    <div className="mt-16 container mx-auto">
      <div>
        <h1 className='text-xl font-bold'>Thông tin sản phẩm</h1>
      </div>
      <FilterForm />
    </div>
  )
}