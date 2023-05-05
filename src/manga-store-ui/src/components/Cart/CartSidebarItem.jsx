"use client"

import FormatVND from "@/src/FormatCurrent/FormatVND";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "@/src/reducers/CartStore";

export default function CartSidebarItem({ product }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="flex">
      <div className="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={process.env.NEXT_PUBLIC_API_URL + `/` + product.imageSrc}
          alt={product.urlSlug}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium">
            <h3>
              <Link href={`/product/${product.urlSlug}`}>{product.name}</Link>
            </h3>
          </div>
          <div>
            {product.discount > 0 ? (
              <div>
                <span className="text-danger-700">
                  {FormatVND(
                    (product.price - (product.price * product.discount) / 100) *
                      product.quantity
                  )}
                </span>
                <span className="ml-1.5 text-gray-dark">
                  <del>{FormatVND(product.price * product.quantity)}</del>
                </span>
              </div>
            ) : (
              <div>
                <span>{FormatVND(product.price * product.quantity)}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Số lượng {product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
              onClick={removeFromCart}>
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
