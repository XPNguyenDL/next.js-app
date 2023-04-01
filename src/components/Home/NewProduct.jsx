import React from "react";
import ProductItem from "../Product/ProductItem";
import SectionHeader from "./SectionHeader";

export default function NewProduct() {
  return (
    <div className="mx-auto px-6 md:px-10 max-w-screen-2xl">
      <SectionHeader title="Sách mới" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
      </div>
    </div>
  );
}
