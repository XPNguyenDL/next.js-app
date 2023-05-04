import { GetProduct, getRelatedProducts } from '@/src/API/ProductAPI';
import React from 'react'
import SectionHeader from '../Home/SectionHeader';
import ProductItem from './ProductItem';

export default async function PopularProducts({ slug }) {
  const productData = getRelatedProducts(slug);
  const data = await productData;
 
  return (
    <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
      <SectionHeader title="Sản phẩm khác" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.result.map((item) => {
            return <ProductItem key={item.id} product={item}/>
          })}
        </div>
      </div>
    </div>
  );
}
