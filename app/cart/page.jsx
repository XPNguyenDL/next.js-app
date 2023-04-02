
import Breadcrumb from "@/src/components/Breadcrumb/Breadcrumb";
import CartSection from "@/src/components/Cart/CartSection";
import UseReduce from "@/src/reducers/UseReduce";
import React from "react";
export const metadata = {
  title: "Giỏ hàng"
  // description: "Generated by create next app"
};

export default function Cart() {
  return (
    <div className="mt-[var(--header-height)]">
      <Breadcrumb currentPlace="Giỏ hàng"/>
      <UseReduce>
        <CartSection/>
      </UseReduce>
    </div>
  );
}
