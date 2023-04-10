import React from 'react'

export default function page({ params }) {
  return (
    <div className='mt-16 grid grid-cols-3 gap-4'>
        <div>{params.id}</div>
        <div className='col-span-2'>{params.id}</div>
    </div>
  )
}
