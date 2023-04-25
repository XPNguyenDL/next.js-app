import FormatVND from "@/src/FormatCurrent/FormatVND";
import React from "react";
import { URL_API } from "../Services/Store";
import { AiOutlineMinus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

export default function ItemCheckout({ item }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2 px-5">
      <div className="flex items-center">
        <img
          src={URL_API + `/` + item.imageSrc}
          alt={item.imageAlt}
          className="mr-6 h-32 w-32 object-cover"
        />
      </div>
      <div>
        <RiCloseLine
          className="ml-auto text-danger-700 opacity-100 hover:opacity-70"
          size={32}
        />
        <div>
          {item.discount > 0 ? (
            <div>
              <span className="text-danger-700">
                {FormatVND(
                  (item.price - (item.price * item.discount) / 100) *
                    item.quantity
                )}
              </span>
              <span className="ml-1.5 text-gray-dark">
                <del>{FormatVND(item.price * item.quantity)}</del>
              </span>
            </div>
          ) : (
            <div>
              <span>{FormatVND(item.price * item.quantity)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}