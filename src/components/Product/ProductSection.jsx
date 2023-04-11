
import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { GetProductBySlug } from "@/src/API/GetProduct";
import Image from "next/image";
import { URL_API } from "../Services/Store";
import FormatVND from "@/src/FormatCurrent/FormatVND";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default async function ProductSection({ slug }) {
  const productData = GetProductBySlug(slug);
  const data = await productData;
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
                    <div className="mb-2.5 border border-gray-light">
                      <Image
                        key={item.id}
                        src={URL_API + "/" + item.path}
                        width={1200}
                        height={1200}
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
                    key={data.pictures[1].id}
                    src={URL_API + "/" + data.pictures[1].path}
                    width={1200}
                    height={1200}
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
            <div className="mt-2.5">
              <button
                className="text-gray-500 opacity-50 hover:opacity-100 mr-1.5">
                <AiOutlineMinus />
              </button>
              <input
                type="number"
                min="1"
                value={0}
                className="border-gray-300 h-8 w-16 border text-center"
              />
              <button
                className="text-gray-500 opacity-50 hover:opacity-100">
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
