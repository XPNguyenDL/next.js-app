"use client";
import { ToggleOrder, getOrdersByQueries } from "@/src/API/OrderAPI";
import React, { useEffect, useState } from "react";
import Pager from "../../Pager/Pager";
import FilterOrders from "./FilterOrders";
import FormatVND from "@/src/FormatCurrent/FormatVND";

export default function OrderManager() {
  // useState
  const [keyword, setKeyword] = useState("");
  const [metadata, setMetadata] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [orders, setOrders] = useState([]);

  const handleChangePage = (value) => {
    setPageNumber((current) => current + value);
    window.scroll(0, 0);
  };

  const handleToggle = (e, id) => {
    e.preventDefault();
    fetchOrder(id);

    async function fetchOrder(id) {
      const res = await ToggleOrder(id);
      if (res) {
        alert("Xác nhận thành công");
        location.reload();
      } else {
        alert("Xác nhận thất bại");
      }
    }
  };

  useEffect(() => {
    fetchOrders();
    async function fetchOrders() {
      const queries = new URLSearchParams({
        PageNumber: pageNumber || 1,
        PageSize: 10,
        SortColumn: "Id",
        ...(keyword && { keyword: keyword })
      });
      const data = await getOrdersByQueries(queries);
      if (data) {
        setOrders(data.result.items);
        setMetadata(data.result.metadata);
      } else {
        setOrders([]);
        setMetadata({});
      }
    }
  }, [keyword, pageNumber]);

  return (
    <div>
      <FilterOrders setKeyword={setKeyword} />
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
                      Thông tin khách hàng
                    </th>
                    <th
                      scope="col"
                      className="max-w-[280px] px-6 py-3 text-left text-xs font-bold uppercase text-gray-500">
                      Thông tin chi tiết đơn hàng
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 ">
                      Trạng thái
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-bold uppercase text-danger-700">
                      Duyệt đơn
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-gray-200 divide-y">
                  {orders.length > 0 ? (
                    orders.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                            {index + 1 + (pageNumber - 1) * 10}
                          </td>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                            <div>
                              <p>
                                Tên khách hàng:{" "}
                                <span className="font-medium">
                                  {item.firstName} {item.lastName}
                                </span>
                              </p>
                            </div>
                            <div>
                              <p>
                                Email:{" "}
                                <span className="font-medium">
                                  {item.email}
                                </span>
                              </p>
                            </div>
                            <div>
                              <p>
                                Số điện thoại:{" "}
                                <span className="font-medium">
                                  {item.shipTel}
                                </span>
                              </p>
                            </div>
                            <div>
                              <p>
                                Ghi chú:{" "}
                                <span className="font-medium">{item.note}</span>
                              </p>
                            </div>
                          </td>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm ">
                            <div>
                              <p className="break-normal">
                                Địa chỉ giao hàng:{" "}
                                <span className="font-medium">
                                  {item.shipAddress}
                                </span>
                              </p>
                            </div>
                            <div>
                              <p>
                                Tổng tiền:{" "}
                                <span className="text-base font-medium text-danger-700">
                                  {FormatVND(item.total)}
                                </span>
                              </p>
                            </div>
                          </td>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm ">
                            <div>
                              {item.status === 0 ? (
                                <p>Chưa xác nhận</p>
                              ) : (
                                <p>Đã xác nhận</p>
                              )}
                            </div>
                          </td>
                          <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm ">
                            {item.status === 0 ? (
                              <button
                                onClick={(e) => handleToggle(e, item.id)}
                                className="mr-2 mb-2 items-center rounded-lg bg-[#FF9119] px-5 py-2.5 text-center text-sm font-medium text-white duration-500 hover:bg-[#FF9119]/80">
                                Xác nhận
                              </button>
                            ) : (
                              <button className="mr-2 mb-2 cursor-default items-center rounded-lg bg-gray-400 px-5 py-2.5 text-center text-sm font-medium text-gray-dark duration-500 hover:bg-gray-100">
                                Xác nhận
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                        Không có đơn hàng nào
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
