"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/icons/neko-logo.svg";
import NavbarAdmin from "./components/NavbarAdmin";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const pages = [
  {
    name: "Trang chủ",
    path: "/admin"
  },
  {
    name: "Sản phẩm",
    path: "/admin/products"
  },
  {
    name: "Danh mục",
    path: "/admin/categories"
  },
  {
    name: "Đơn hàng",
    path: "/admin/orders"
  }
];

export default function HeadAdmin() {
  const router = useRouter();

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      if (!localStorage.getItem("token")) {
        router.push("/login");
      }
    } else {
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-40 flex h-[var(--header-height)] w-full bg-white-opacity shadow-lg">
      <div className="container mx-auto flex h-[var(--header-height)] flex-wrap items-center justify-end px-4 xl:justify-between">
        <div className="lg:static lg:block lg:w-auto lg:justify-start">
          <Link className="flex items-center" href="/admin">
            <Image
              src={Logo}
              className="max-h-[60px] max-w-[90px] object-cover"
              alt="brand-logo"
            />
          </Link>
        </div>
        <NavbarAdmin pages={pages} />
      </div>
    </nav>
  );
}
