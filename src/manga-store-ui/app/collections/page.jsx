import Breadcrumb from "@/src/components/Breadcrumb/Breadcrumb";
import CollectionSection from "@/src/components/Collection/CollectionSection";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="mt-16">
      <Breadcrumb currentPlace={"Cửa hàng"}/>
      <CollectionSection />
    </div>
  );
}
