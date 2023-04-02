"use client";

import React from "react";
import CartItem from "./CartItem.jsx";
import { useSelector } from "react-redux";
import FormatVND from "@/src/FormatCurrent/FormatVND.jsx";

export default function CartSection() {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems
    .reduce((acc, item) => {
      if (!item.quantity) {
        return 0;
      }
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  const displayTotal = isNaN(total) ? "N/A" : `${total}`;

  return (
    <div className="container mx-auto mt-10 mt-[var(--header-height)]">
      <h1 className="mb-4 text-2xl font-bold">Giỏ hàng</h1>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          <div className="flex justify-between">
            <p className="font-bold">Thành tiền:</p>
            <p className="font-bold">{FormatVND(displayTotal)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
