import Image from "next/image";
import Link from "next/link";
import React from "react";
import journey from "@/public/assets/images/home/journey.jpg";

export default function ProductItem() {
  return (
    <div className="relative mb-2.5 overflow-hidden bg-white group">
      <div className="px-5">
        <div className="relative overflow-hidden">
          <Link href={`product/123`} title={"Mừng cậu trở về"}>
            <Image src={journey} alt='category-image' className='invisible'/>
            <Image
              src={journey}
              sizes="(max-width: 768px) 30vw,
                    (max-width: 1024px) 25vw,
                    (max-width: 1280px) 40vw,
                    40vw"
                    className="absolute top-0 duration-500 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="w-full mt-1.5">
          <h3 className="relative mb-1.5 min-h-[18px] text-sm hover:text-purple">
            <Link href={`product/123`} title={"Mừng cậu trở về"}>
              Mừng cậu trở về
            </Link>
          </h3>
          <div>
            <p>
              <span className="text-danger-700">89,000₫</span>
              <span className="ml-1.5 text-gray-dark">
                <del>76,000₫</del>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
