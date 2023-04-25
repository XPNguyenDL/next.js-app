import { GetProductBySlug } from "@/src/API/GetProduct";
import PopularProducts from "@/src/components/Product/PopularProducts";
import ProductSection from "@/src/components/Product/ProductSection";
import UseReduce from "@/src/reducers/UseReduce";
import React from "react";

export default async function page({ params }) {
  const productData = GetProductBySlug(params.slug);
  const data = await productData;
  return (
    <div className="mt-16">
      <UseReduce>
        <ProductSection data={data} />
      </UseReduce>
      <PopularProducts />
    </div>
  );
}
