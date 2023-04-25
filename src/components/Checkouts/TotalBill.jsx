"use client";

import React, { useEffect, useState } from "react";
import ItemCheckout from "./ItemCheckout";
import FormatVND from "@/src/FormatCurrent/FormatVND";

export default function TotalBill() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const products = localStorage.getItem("cart-products");
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
  }, [data, total]);

  return (
    <div className="container mx-auto mt-5">
        <div className="px-5 text-xl font-bold mb-5">Thông tin đơn hàng</div>
      <div className="flex h-96 max-h-96 flex-col space-y-4 overflow-y-auto">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div key={item.id}>
              <ItemCheckout item={item} />
            </div>
          ))}
      </div>
      <div className="flex justify-end px-5">
        <div className="text-2xl my-5">
          Tổng tiền:
          <span className="font-bold text-danger-600 ml-2.5">{FormatVND(total)}</span>
        </div>
      </div>
    </div>
  );
}
