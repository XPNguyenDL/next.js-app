import FormatVND from "@/src/FormatCurrent/FormatVND";
import React from "react";

export default function CartSidebarItem({ product }) {
  return (
    <div className="flex">
      <div className="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium">
            <h3>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className="ml-4">{FormatVND(product.price)}</p>
          </div>
          <p className="text-gray-500 mt-1 text-sm">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Số lượng {product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-500 font-medium">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
