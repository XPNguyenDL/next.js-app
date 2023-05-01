import { GetProduct } from '@/src/API/GetProduct';
import React from 'react'
import SectionHeader from '../Home/SectionHeader';
import ProductItem from './ProductItem';

export default async function PopularProducts() {
  //Get data
  const productData = GetProduct();
  const data = await productData;
 
  return (
    <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
      <SectionHeader title="Sản phẩm khác" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-cols-4">
          {data.result.items.map((item) => {
            return <ProductItem key={item.id} product={item}/>
          })}
        </div>
      </div>
    </div>
  );
}
