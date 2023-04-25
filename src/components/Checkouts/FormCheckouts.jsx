"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function FormCheckouts() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mt-2.5 max-w-lg">
      <div className="flex flex-wrap mb-2.5 justify-between">
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
        <div className="w-full md:w-1/2 pl-3">
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Tên"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-2.5">
        <input
          type="address"
          id="address"
          name="address"
          placeholder="Địa chỉ nhận hàng"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
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
