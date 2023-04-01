import { PageNotFoundError } from "next/dist/shared/lib/utils";
import React from "react";

export default async function page({ params }) {
  return (
<div className="mt-16">
    {params.slug}
    </div>
  )
  ;
  
}
