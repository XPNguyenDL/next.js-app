import Breadcrumb from "@/src/components/Breadcrumb/Breadcrumb";
import ProductSection from "@/src/components/Product/ProductSection";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import React from "react";

export default async function page({ params }) {
  return (
    <div className="mt-16">
      
      <ProductSection slug={params.slug}/>
    </div>
  );
}
