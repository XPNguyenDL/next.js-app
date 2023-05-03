import React from "react";
import ProductItem from "../Product/ProductItem";
import SectionHeader from "./SectionHeader";
import { GetProduct, getTopSales } from "@/src/API/ProductAPI";

export default async function NewProduct() {
  //Get data
  const productData = getTopSales();
  const data = await productData;
 
  return (
    <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
      <SectionHeader title="Sách mới" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-cols-4">
          {data.result.map((item) => {
            return <ProductItem key={item.id} product={item}/>
          })}
        </div>
      </div>
    </div>
  );
}
