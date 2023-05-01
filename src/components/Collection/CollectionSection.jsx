import React from "react";
import ProductItem from "../Product/ProductItem";
import { GetProduct } from "@/src/API/GetProduct";

export default async function CollectionSection() {
  //Get data
  const productData = GetProduct();
  const data = await productData;

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 xl:grid-cols-4">
      {data.result.items.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
}
