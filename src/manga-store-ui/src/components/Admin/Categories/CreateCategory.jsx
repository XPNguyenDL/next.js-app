"use client";

import React, { useState } from "react";
import SectionHeader from "../../Home/SectionHeader";
import Link from "next/link";
import { addCategory } from "@/src/API/CategoriesAPI";
import { useRouter } from "next/navigation";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const [description, setDecription] = useState("");
  const [slug, setSlug] = useState("");

  // Router 
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      urlSlug: slug,
      description: description
    };

    const res = addCategory(data);
    const result = await res;
    if (result.isSuccess) {
       if(confirm("Tạo thành công")) {
        router.push('/admin/categories')
       }
    } else {
        alert(result.errors[0]);
    }
  };

  return (
    <div>
      <SectionHeader title={"Thêm danh mục mới"} />
      <form method="post" className="mt-5 max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-2.5">
          <div className="mb-6">
            <label className="mb-1.5 text-lg font-bold">Tên danh mục</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tên danh mục"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-1.5 text-lg font-bold">Url Slug</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tên danh mục"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-1.5 text-lg font-bold">Mô tả</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tên danh mục"
              value={description}
              onChange={(event) => setDecription(event.target.value)}
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
              
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Link href={"/admin/categories"}>Quay lại</Link>
          </div>
          <button
            type="submit"
            className="mr-2 mb-2 items-center rounded-lg bg-[#FF9119] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF9119]/80 focus:outline-none focus:ring-4 focus:ring-[#FF9119]/50 dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}
