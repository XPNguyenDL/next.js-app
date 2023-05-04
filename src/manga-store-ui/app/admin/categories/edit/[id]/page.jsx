import { getCategoryById } from "@/src/API/CategoriesAPI";
import EditCategory from "@/src/components/Admin/Categories/EditCategory";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }) {
  const res = getCategoryById(params.id);
  const data = await res;
  if (!data.isSuccess) return notFound();

  return <div className="container mx-auto mt-16">
    <EditCategory category={data.result}/>
  </div>;
}
