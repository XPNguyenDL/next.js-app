"use client";

import React, { useEffect, useState } from "react";
import ItemCheckout from "./ItemCheckout";
import FormatVND from "@/src/FormatCurrent/FormatVND";
import UseReduce from "@/src/reducers/UseReduce";

export default function TotalBill() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const products = localStorage.getItem("cart-products");
    if (products) {
      setData(JSON.parse(products));

      const total = JSON.parse(products)
        .reduce((acc, item) => {
          if (!item.quantity) {
            return 0;
          }
          return (
            acc +
            (item.price - (item.price * item.discount) / 100) * item.quantity
          );
        }, 0)
        .toFixed(2);
      setTotal(total);
    }
  }, [data]);

  return (
    <div className="container mx-auto mt-5">
      <div className="mb-5 px-5 text-xl font-bold">Thông tin đơn hàng</div>
      <div className="flex h-96 max-h-96 flex-col space-y-4 overflow-y-auto">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div key={item.id}>
              <UseReduce>
                <ItemCheckout item={item} />
              </UseReduce>
            </div>
          ))}
      </div>
      <div className="flex justify-end px-5">
        <div className="my-5 text-2xl">
          Tổng tiền:
          <span className="ml-2.5 font-bold text-danger-600">
            {FormatVND(total)}
          </span>
        </div>
      </div>
    </div>
  );
}
