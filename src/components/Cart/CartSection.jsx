import React from "react";
import CartItem from "./CartItem.jsx";

export default function CartSection() {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://s199.imacdn.com/vg/2022/10/12/dcb5b9169f8e39a0_097d879a510af296_18458116655539437756547.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      quantity: 1,
      image: "https://s199.imacdn.com/vg/2022/10/12/dcb5b9169f8e39a0_097d879a510af296_18458116655539437756547.jpg"
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.99,
      quantity: 4,
      image: "https://s199.imacdn.com/vg/2022/10/12/dcb5b9169f8e39a0_097d879a510af296_18458116655539437756547.jpg"
    }
  ];


  return (
    <div className="container mx-auto mt-10 mt-[var(--header-height)]">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="flex justify-between">
            <p className="font-bold">Total:</p>
            <p className="font-bold">
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
