"use client";

import React from "react";
import CartItem from "./CartItem.jsx";
import { useSelector } from "react-redux";

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

const displayTotal = isNaN(total) ? "N/A" : `$${total}`;

  return (
    <div className="container mx-auto mt-10 mt-[var(--header-height)]">
      <h1 className="mb-4 text-2xl font-bold">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          <div className="flex justify-between">
            <p className="font-bold">Total:</p>
            <p className="font-bold">
              $ {displayTotal}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
