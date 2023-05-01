"use client";

import Link from "next/link";
import React, { useRef } from "react";

export default function FilterCategories({ setKeyword }) {
  const keywordRef = useRef();

  const handleFilterPosts = (e) => {
    e.preventDefault();
    setKeyword(keywordRef.current.value);
  };

  const handleClearFilter = () => {
    setKeyword("");
    keywordRef.current.value = "";
  };
  return (
    <form method="get" onSubmit={handleFilterPosts} className="flex">
      <div className="flex flex-col justify-center mr-5">
        <input
          ref={keywordRef}
          type="text"
          placeholder="Nhập từ khóa..."
          name="keyword"
          className="border h-[36px] p-2 rounded "
        />
      </div>
      <div className="my-auto">
        <button
          type="submit"
          className=" text-gray-900 border-gray-200 mr-2 rounded-full border bg-gray-500 py-2.5 px-5 text-sm font-medium text-white duration-500 hover:bg-gray-100 hover:text-purple focus:z-10">
          Tìm/Lọc
        </button>
        <button
          onClick={handleClearFilter}
          className="text-gray-900 border-gray-200 mr-2 mb-2 rounded-full border bg-secondary-300 py-2.5 px-5 text-sm font-medium  duration-500 hover:bg-gray-100 hover:text-purple focus:z-10">
          Bỏ lọc
        </button>
        <button className="text-gray-900 border-gray-200 mr-2 mb-2 rounded-full border bg-success py-2.5 px-5 text-sm font-medium text-white duration-500 hover:bg-gray-100 hover:text-purple focus:z-10">
          <Link href="/admin/category/edit">
            Thêm mới
          </Link>
        </button>
      </div>
    </form>
  );
}
