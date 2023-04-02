import Breadcrumb from "@/src/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="mt-16">
      <Breadcrumb currentPlace={"Cửa hàng"}/>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div>params.id</div>
        <div className="col-span-2">params.id</div>
      </div>
    </div>
  );
}
