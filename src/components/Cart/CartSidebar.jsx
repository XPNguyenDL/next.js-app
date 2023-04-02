"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import CartSidebarItem from "./CartSidebarItem";
import { RiShoppingCart2Line } from "react-icons/ri";
import FormatVND from "@/src/FormatCurrent/FormatVND";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90000.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "320000.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
  }
  // More products...
];

export default function CartSidebar() {
  const [open, setOpen] = useState(false);

  const total = products
    .reduce((acc, item) => {
      if (!item.quantity) {
        return 0;
      }
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  const displayTotal = isNaN(total) ? "N/A" : `${total}`;

  return (
    <>
      <div
        className="flex transform hover:text-purple hover:opacity-100"
        onClick={() => setOpen(!open)}>
        <RiShoppingCart2Line size={24} />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <div className="fixed inset-0 bg-gray-light bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full">
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-gray-900 text-lg font-medium">
                            Giỏ hàng
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-500 -m-2 p-2"
                              onClick={() => setOpen(false)}>
                              <span className="sr-only">Đóng</span>
                              <AiOutlineClose
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="divide-gray-200 -my-6 divide-y">
                              {products.map((product) => (
                                <li key={product.id} className="py-6">
                                  <CartSidebarItem product={product} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-gray-200 border-t px-4 py-6 sm:px-6">
                        <div className="text-gray-900 flex justify-between text-base font-medium">
                          <p>Thành tiền</p>
                          <p>{FormatVND(displayTotal)}</p>
                        </div>
                        <p className="text-gray-500 mt-0.5 text-sm">
                          Thanh toán khi nhận hàng.
                        </p>
                        <div className="mt-6">
                          <Link
                            onClick={() => setOpen(false)}
                            href="/cart"
                            className="flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium hover:opacity-50">
                            Xem giỏ hàng
                          </Link>
                        </div>
                        <div className="text-gray-500 mt-6 flex justify-center text-center text-sm">
                          <div
                            onClick={() => setOpen(false)}
                            className="text-indigo-600 hover:text-indigo-500 cursor-pointer font-medium">
                            Tiếp tục mua hàng
                            <span aria-hidden="true"> &rarr;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
