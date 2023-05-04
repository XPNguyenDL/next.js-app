import CategoriesManager from '@/src/components/Admin/Categories/Categories'
import FilterCategories from '@/src/components/Admin/Categories/FilterCategories'
import React from 'react'

export default function page() {
  return (
    <div className="mt-16 container mx-auto">
      <div>
        <h1 className='text-xl font-bold'>Thông tin danh mục</h1>
      </div>
      <CategoriesManager />
    </div>
  )
}
