
import { GetProductById } from '@/src/API/ProductAPI';
import EditProduct from '@/src/components/Admin/Products/EditProduct';
import React from 'react'

export default async function page({ params }) {

    const res = GetProductById(params.id);
    const data = await res;
    if (!data.isSuccess) return notFound();
  
    return <div className="container mx-auto mt-16">
      <EditProduct product={data.result} id={params.id}/>
    </div>;
}
