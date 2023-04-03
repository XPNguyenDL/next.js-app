import Image from "next/image";
import Link from "next/link";
import React from "react";
import journey from "@/public/assets/images/home/journey.jpg";
import FormatVND from "@/src/FormatCurrent/FormatVND";

export default function ProductItem({ product }) {
  let pictures = product.pictures;
  const url = "https://localhost:7158/";
  if (pictures.length < 1 || pictures == undefined) {
    pictures = [
      {
        id: "5ae336aa",
        productId: product.id,
        path: journey,
        active: true
      }
    ];
  }

  return (
    <div className="group relative mb-2.5 overflow-hidden bg-white">
      <div className="px-5">
        <div className="relative overflow-hidden">
          <Link href={`product/${product.urlSlug}`} title={"Mừng cậu trở về"}>
            <Image src={journey} alt="category-image" className="invisible" />
            {pictures.map((item) => {
              return (
                <Image
                  key={item.id}
                  src={item.path === journey ? item.path : url + item.path}
                  sizes="(max-width: 768px) 30vw,
                    (max-width: 1024px) 25vw,
                    (max-width: 1280px) 40vw,
                    40vw"
                  alt="category-image"
                  width={1200}
                  height={1200}
                  className="absolute top-0 duration-500 group-hover:scale-105"
                />
              );
            })}
          </Link>
        </div>
        <div className="mt-1.5 w-full">
          <h3 className="relative mb-1.5 min-h-[18px] text-sm hover:text-purple">
            <Link href={`product/123`} title={"Mừng cậu trở về"}>
              {product.name}
            </Link>
          </h3>
          <div>
              {product.discount > 0 ? (
                <div>
                  <span className="text-danger-700">
                    {FormatVND(product.price - product.price * product.discount / 100)}
                  </span>
                  <span className="ml-1.5 text-gray-dark">
                    <del>{FormatVND(product.price)}</del>
                  </span>
                </div>
              ) : (
                <div>
                  <span>
                    {FormatVND(product.price)}
                  </span>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
