"use client";

import { LoginApi } from "@/src/API/UserApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    const dataLogin = {
      username: userName,
      password: password
    };

    const res = LoginApi(dataLogin);
    const data = await res;
    if (data.isSuccess) {
      if (confirm("Đăng nhập thành công")) {
        localStorage.setItem("token", `bearer ${data.result.token}`);
        router.push("/admin");
      }
    } else {
      setError(data.errors[0]);
      // alert(data.errors[0]);
    }
  };

  return (
    <div className="relative mx-auto flex w-full justify-center">
      <form
        method="post"
        onSubmit={handleLogin}
        className="mt-2.5 w-full max-w-md">
        {error ? (
          <div className="mb-2.5 text-center text-danger-600">{error}</div>
        ) : (
          <></>
        )}
        <div className="mb-2.5 flex w-full flex-wrap justify-between">
          <div className="mb-6 w-full">
            <input
              type="text"
              id="user-name"
              name="user-name"
              placeholder="Tên đăng nhập"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="mb-6 w-full">
            <input
              type="password"
              id="user-name"
              name="user-name"
              placeholder="Mật khẩu"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="flex max-w-lg justify-between">
          <div>
            <Link href={"/register"}>Đăng ký</Link>
          </div>
          <button
            type="submit"
            className="mr-2 mb-2 inline-flex items-center rounded-lg bg-[#FF9119] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF9119]/80 focus:outline-none focus:ring-4 focus:ring-[#FF9119]/50 dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}
