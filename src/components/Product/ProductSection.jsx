"use client";
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { URL_API } from "../Services/Store";
import FormatVND from "@/src/FormatCurrent/FormatVND";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "@/src/styles/animation.scss";
import { useSelector } from "react-redux";
import { addProduct, updateItemQuantity } from "@/src/reducers/CartStore";

export default function ProductSection({ data }) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const result = {
      id: data.id,
      name: data.name,
      price: data.price,
      urlSlug: data.urlSlug,
      discount: data.discount,
      quantity: quantity,
      imageSrc: data.pictures.length > 0 ? data.pictures[0].path : ""
    };
    console.log(currentProduct);
    console.log(result);
    if (currentProduct.some((item) => item.id === result.id)) {
      dispatch(updateItemQuantity(result, quantity + 1));
      setQuantity(pre => pre + 1);
    } else {
      dispatch(addProduct(result));
    }
  };
  return (
    <div>
      <Breadcrumb currentPlace={data.name} />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="sticky flex">
            <div className="hidden w-[9%] lg:block">
              <div className="top-[65px] w-full pb-px">
                {data.pictures.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="mb-2.5 border border-gray-light">
                      <Image
                        src={URL_API + "/" + item.path}
                        width={1200}
                        height={1200}
                        alt={item.urlSlug}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative w-[91%]">
              <div className="sticky top-[65px] mx-auto w-[91%] pb-px">
                <div className="mb-2.5 border border-gray-light">
                  <Image
                    src={URL_API + "/" + data.pictures.length > 0 ? data.pictures[0].path : ""}
                    width={1200}
                    height={1200}
                    alt={data.urlSlug}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-[75px]">
            <div className="border-b border-dotted pb-2.5">
              <h1 className="text-xl font-bold">{data.name}</h1>
              <span className="text-xs text-gray-400">SKU: {data.id}</span>
            </div>
            <div className="border-b border-dotted py-2.5 font-bold">
              {data.discount > 0 ? (
                <div>
                  <span className="text-danger-700">
                    {FormatVND(data.price - (data.price * data.discount) / 100)}
                  </span>
                  <span className="ml-1.5 text-gray-dark">
                    <del>{FormatVND(data.price)}</del>
                  </span>
                </div>
              ) : (
                <div>
                  <span>{FormatVND(data.price)}</span>
                </div>
              )}
            </div>
            <div className="m-2.5">
              <button className="mr-1.5 text-gray-500 opacity-50 hover:opacity-100">
                <AiOutlineMinus />
              </button>
              <input
                type="number"
                min="1"
                defaultValue={1}
                onChange={(e) => setQuantity(e.target.value)}
                className="border-gray-300 h-8 w-16 border text-center"
              />
              <button className="ml-1.5 text-gray-500 opacity-50 hover:opacity-100">
                <AiOutlinePlus />
              </button>
            </div>
            <div className="mt-1.5 text-center font-bold">
              <button
                className="btn-slide w-full rounded-none text-white after:bg-danger-600 hover:after:bg-gray-100"
                onClick={handleAddToCart}>
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="my-5 border-t border-dotted py-2.5 ">
              <div className="font-bold">Mô tả:</div>
              <span>{data.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
