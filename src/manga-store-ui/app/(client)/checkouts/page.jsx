 import InfoCheckouts from '@/src/components/Checkouts/InfoCheckouts'
import TotalBill from '@/src/components/Checkouts/TotalBill'
import React from 'react'
 
 export default function page() {
   return (
     <div className='mt-16 container mx-auto'>
        <div className="grid grid-cols-2 gap-4">
            <InfoCheckouts />
            <div className='bg-gray-100'>
              <TotalBill />
            </div>
        </div>
     </div>
   )
 }
 