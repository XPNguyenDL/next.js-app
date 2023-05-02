"use client";
import { deleteCategory, getCategoriesByQueries } from "@/src/API/CategoriesAPI";
import React, { useEffect, useState } from "react";
import FilterCategories from "./FilterCategories";
import Link from "next/link";
import Pager from "../../Pager/Pager";

export default function CategoriesManager() {
  // useState
  const [keyword, setKeyword] = useState("");
  const [metadata, setMetadata] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategories] = useState([]);

  const handleChangePage = (value) => {
    setPageNumber((current) => current + value);
    window.scroll(0, 0);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    DeleteCategory(id);

    async function DeleteCategory(id) {
      if (confirm("Bạn có chắc muốn xóa?")) {
        const res = await deleteCategory(id);
        if (res) {
          alert("Xóa thành công");
          // location.reload();
        } else {
          alert("Xóa thất bại");
        }
      }
    }
  };

  useEffect(() => {
    fetchCategory();
    async function fetchCategory() {
      const queries = new URLSearchParams({
        PageNumber: pageNumber || 1,
        PageSize: 10,
        SortColumn: "Id",
        ...(keyword && { keyword: keyword })
      });
      const data = await getCategoriesByQueries(queries);
      if (data) {
        setCategories(data.result.items);
        setMetadata(data.result.metadata);
      } else {
        setCategories([]);
        setMetadata({});
      }
    }
  }, [keyword, pageNumber]);

  return (
    <div>
      <FilterCategories setKeyword={setKeyword} />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-full p-1.5 align-middle">
            <div className="overflow-hidden rounded-lg border">
              <table className="divide-gray-200 min-w-full divide-y">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 ">
                      Thứ tự
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 ">
                      Tên danh mục
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 ">
                      Mô tả
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 ">
                      Chỉnh sửa
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-bold uppercase text-danger-700">
                      Xóa
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-gray-200 divide-y">
                  {categories.length > 0 ? (
                    categories.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                            {index + 1}
                          </td>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                            {item.name}
                          </td>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                            {item.description}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                            <Link
                              className="text-green-500 hover:text-green-700"
                              href={`/admin/categories/edit/${item.id}`}>
                              Chỉnh sửa
                            </Link>
                          </td>
                          <td className="whitespace-nowrap cursor-pointer px-6 py-4 text-right text-sm font-medium">
                            <div
                              className="text-danger-500 hover:text-danger-700"
                              onClick={(e) => handleDelete(e, item.id)}>
                              Xóa
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                          Không có danh mục nào
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
              <Pager metadata={metadata} onPageChange={handleChangePage} />
          </div>
        </div>
      </div>
    </div>
  );
}
