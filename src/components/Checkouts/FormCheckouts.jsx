"use client";
import { CheckoutsAPI } from "@/src/API/OrderAPI";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function FormCheckouts() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [detail, setDetail] = useState([{ id: "", quantity: 0 }]);
  const router = useRouter();

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const local = localStorage.getItem("cart-products");
      const products = JSON.parse(local);
      if (products) {
        const data = products.map(({ id, quantity }) => ({
          id,
          quantity
        }));
        setDetail(data);
      } else {
      }
    } else {
      setDetail([]);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here

    const orderData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      shipAddress: address,
      shipTel: phone,
      note: note ?? "",
      detail: detail
    };

    const dashboard = CheckoutsAPI(orderData);
    const data = await dashboard;
    if (data) {
      if (confirm("Mua hàng thành công")) {
        localStorage.removeItem("cart-products");
        router.push(`/`);
      }
    } else {
      confirm("Đã có lỗi xảy ra");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2.5 w-full max-w-lg">
      <div className="mb-2.5 flex flex-wrap justify-between">
        <div className="mb-6 w-full md:mb-0 md:w-1/2">
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Họ"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
            required
          />
        </div>
        <div className="w-full pl-3 md:w-1/2">
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Tên"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="mb-2.5">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
          required
        />
      </div>
      <div className="mb-2.5">
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
          required
        />
      </div>
      <div className="mb-2.5">
        <input
          type="address"
          id="address"
          name="address"
          placeholder="Địa chỉ nhận hàng"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
          required
        />
      </div>
      <div className="mb-2.5">
        <textarea
          cols={4}
          type="note"
          id="note"
          name="note"
          placeholder="Ghi chú..."
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex max-w-lg justify-between">
        <div>
          <Link href={"/cart"}>Giỏ hàng</Link>
        </div>
        <button
          type="submit"
          className="mr-2 mb-2 inline-flex items-center rounded-lg bg-[#FF9119] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF9119]/80 focus:outline-none focus:ring-4 focus:ring-[#FF9119]/50 dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40">
          Hoàn tất đơn hàng
        </button>
      </div>
    </form>
  );
}
