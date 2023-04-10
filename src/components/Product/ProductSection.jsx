import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { GetProductBySlug } from "@/src/API/GetProduct";

export default async function ProductSection({ slug }) {
    const productData = GetProductBySlug(slug);
  const data = await productData;
  return (
    <div>
        <Breadcrumb currentPlace={data.name}/>
      <div className="container mx-auto grid grid-cols-2">
        <div>asd</div>
        <div>123</div>
      </div>
    </div>
  );
}
