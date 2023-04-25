import React from "react";
import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";
import FormCheckouts from "./FormCheckouts";

export default function InfoCheckouts() {
  return (
    <div className="pt-16 flex justify-center">
      <div>
        <h2 className="text-2xl font-bold">Neko Store</h2>
        <div>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="container mx-auto inline-flex h-[80px] items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-blue-600 inline-flex items-center text-sm font-medium dark:text-gray-400 dark:hover:text-white">
                  <BsCartCheck className="mr-2" size={16} />
                  Giỏ hàng
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <p className="mr-2">/</p>
                  <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2">
                    Thông tin sản phẩm
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <h2 className="text-lg font-normal">Thông tin giao hàng</h2>
        <FormCheckouts />
        
      </div>
    </div>
  );
}
