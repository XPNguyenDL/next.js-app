import Navigate from "@/src/components/Collection/Navigate";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="mt-16 ">
      <Navigate />
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div>params.id</div>
        <div className="col-span-2">params.id</div>
      </div>
    </div>
  );
}
