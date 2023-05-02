import { GetProductBySlug } from "@/src/API/ProductAPI";
import PopularProducts from "@/src/components/Product/PopularProducts";
import ProductSection from "@/src/components/Product/ProductSection";
import UseReduce from "@/src/reducers/UseReduce";
import React from "react";
import { notFound } from 'next/navigation';

export default async function page({ params }) {
  const productData = GetProductBySlug(params.slug);
  const data = await productData;
  if (!data.isSuccess) return notFound();


  return (
    <div className="mt-16">
      <UseReduce>
        <ProductSection data={data.result} />
      </UseReduce>
      <PopularProducts />
    </div>
  );
}
