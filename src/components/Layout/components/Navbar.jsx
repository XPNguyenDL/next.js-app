"use client";

import images from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const pages = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "SHOP",
    path: "/"
  },
  {
    name: "ABOUT",
    path: "/"
  },
  {
    name: "SIGN IN",
    path: "/"
  },
  {
    name: "SIGN UP",
    path: "/"
  }
];

export default function Navbar() {
  const [mobileMode, setMobileMode] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <Image
                src={images.brandLogo}
                className="max-w-[80px]"
                alt="brand-logo"
              />
            </Link>
          </div>
          {!mobileMode ? (
            <div className="lg:flex items-center" id="example-navbar-danger">
              <ul className="flex lg:flex-row list-none lg:ml-auto">
                {pages.map((page, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-white hover:opacity-25"
                      href="/"
                    >
                      <span className="ml-2 font text-lg">{page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}
