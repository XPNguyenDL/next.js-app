"use client";

import FormatVND from "@/src/FormatCurrent/FormatVND";
import { removeProduct, updateItemQuantity } from "@/src/reducers/CartStore";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeProduct(item.id));
  };
  const updateQuantity = (quantity) => {
    if (quantity >= 0) {
      dispatch(updateItemQuantity(item, quantity));
    }
  };
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
      <div className="flex items-center">
        <img
          src={process.env.NEXT_PUBLIC_API_URL + `/` + item.imageSrc}
          alt={item.imageAlt}
          className="mr-6 h-32 w-32 object-cover"
        />
        <div>
          <h2 className="font-bold">{item.name}</h2>
          <div className="mt-2 flex space-x-2">
            <button
              className="text-gray-500 opacity-50 hover:opacity-100"
              onClick={() => updateQuantity(item.quantity - 1)}>
              <AiOutlineMinus />
            </button>
            <input
              type="number"
              min="1"
              value={isNaN(item.quantity) ? "" : item.quantity}
              onChange={(e) => updateQuantity(parseInt(e.target.value))}
              className="border-gray-300 h-8 w-16 border text-center"
            />
            <button
              className="text-gray-500 opacity-50 hover:opacity-100"
              onClick={() => updateQuantity(item.quantity + 1)}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
      <div>
        <RiCloseLine 
        onClick={() => removeFromCart(item.id)}
        className="ml-auto text-danger-700 opacity-100 hover:opacity-70" 
        size={32}/>
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
