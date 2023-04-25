"use client";

import React from "react";
import CartItem from "./CartItem.jsx";
import { useSelector } from "react-redux";
import FormatVND from "@/src/FormatCurrent/FormatVND.jsx";
import Link from "next/link.js";
import "@/src/styles/animation.scss";

export default function CartSection() {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems
    .reduce((acc, item) => {
      if (!item.quantity) {
        return 0;
      }
      return acc + (item.price - item.price * item.discount / 100)* item.quantity;
    }, 0)
    .toFixed(2);

  const displayTotal = isNaN(total) ? "N/A" : `${total}`;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="mb-4 text-center text-2xl font-bold">Giỏ hàng</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          {cartItems.length === 0 ? (
            <p>Không có sản phẩm nào trong giỏ hàng.</p>
          ) : (
            <div className="flex flex-col space-y-4">
              {cartItems &&
                cartItems.length > 0 &&
                cartItems.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
          )}
        </div>
        <div>
          <div className="h-fit rounded-lg border p-5 shadow-lg">
            <h2 className="my-2.5 text-xl font-medium">Thông tin đơn hàng</h2>
            <div className="flex justify-between border-y border-gray-400 py-5">
              <p className="text-lg font-medium text-gray-500">Thành tiền:</p>
              <p className="text-2xl font-medium text-danger-700">
                {FormatVND(displayTotal)}
              </p>
            </div>
            <div className="flex justify-between mt-2.5">
              <p className="text-base font-medium text-gray-500">
                Phí vận chuyển sẽ được tính ở trang thanh toán. <br />
                Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
              </p>
            </div>
            <div className="my-5 text-center">
              <button className="btn-slide w-full rounded-none text-white after:bg-danger-600 hover:after:bg-gray-100 ">
                <Link href="/checkouts" title="Xem ngay">
                  Thanh toán
                </Link>
              </button>
            </div>
           
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <div className="text-indigo-600 hover:text-indigo-500 cursor-pointer font-medium">
                <Link href="/collections">Tiếp tục mua hàng</Link>
                <span aria-hidden="true"> &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
