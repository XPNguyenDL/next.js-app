import CreateCategory from "@/src/components/Admin/Categories/CreateCategory";
import UseReduce from "@/src/reducers/UseReduce";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto mt-16">
      <UseReduce>
        <CreateCategory />
      </UseReduce>
    </div>
  );
}
