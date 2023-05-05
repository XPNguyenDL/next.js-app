"use client";
import { deleteProduct, getProductsByQueries } from "@/src/API/ProductAPI";
import React, { useEffect, useState } from "react";
import FilterProducts from "./FilterProducts";
import Pager from "../../Pager/Pager";
import Link from "next/link";
import FormatVND from "@/src/FormatCurrent/FormatVND";

export default function ProductsManager() {
  // useState
  const [keyword, setKeyword] = useState("");
  const [metadata, setMetadata] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState([]);

  const handleChangePage = (value) => {
    setPageNumber((current) => current + value);
    window.scroll(0, 0);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    DeleteProducts(id);

    async function DeleteProducts(id) {
      if (confirm("Bạn có chắc muốn xóa?")) {
        const res = await deleteProduct(id);
        if (res) {
          alert("Xóa thành công");
          location.reload();
        } else {
          alert("Xóa thất bại");
        }
      }
    }
  };

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const queries = new URLSearchParams({
        PageNumber: pageNumber || 1,
        PageSize: 10,
        SortColumn: "CreateDate",
        SortOrder: "DESC",
        ...(keyword && { keyword: keyword })
      });
      const data = await getProductsByQueries(queries);
      if (data) {
        setProducts(data.result.items);
        setMetadata(data.result.metadata);
      } else {
        setProducts([]);
        setMetadata({});
      }
    }
  }, [keyword, pageNumber]);

  return (
    <div>
      <FilterProducts setKeyword={setKeyword} />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-full align-middle">
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
                      Thông tin sản phẩm
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 ">
                      Mô tả
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 ">
                      Trạng thái
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
                  {products.length > 0 ? (
                    products.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                            {index + 1 + ((pageNumber - 1) * 10)}
                          </td>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                            <div>Tên: {item.name}</div>
                            <div>Số lượng: {item.quantity}</div>
                            <div>
                              Giá bán:{" "}
                              <span className="text-danger-700">
                                {FormatVND(
                                  item.price -
                                    (item.price * item.discount) / 100
                                )}
                              </span>
                              <span className="ml-1.5 text-gray-dark">
                                <del>{FormatVND(item.price)}</del>
                              </span>
                            </div>
                          </td>
                          <td className="text-gray-800 max-w-lg overflow-hidden whitespace-nowrap px-6 py-4 text-sm">
                            {item.shortIntro}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                            <div className="text-green-500 hover:text-green-700">
                              {item.quantity > 0 ? (
                                <p>Còn hàng</p>
                              ) : (
                                <p>Hết hàng</p>
                              )}
                            </div>
                          </td>

                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                            <Link
                              className="text-green-500 hover:text-green-700"
                              href={`/admin/products/edit/${item.id}`}>
                              Chỉnh sửa
                            </Link>
                          </td>

                          <td className="cursor-pointer whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
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
                        Không có sản phẩm nào
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
