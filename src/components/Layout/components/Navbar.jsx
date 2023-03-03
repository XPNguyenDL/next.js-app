"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useLayoutEffect, useState } from "react";

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
  const NAVIGATION_ANIMATION =
    "transition transform duration-500 slide-in hover:-translate-y-1 ";

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 mt-1 mb-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="lg:flex items-center" id="example-navbar-danger">
            <ul className="hidden xl:flex lg:flex-row list-none lg:ml-auto">
              {pages.map((page, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={
                      "p-3 flex items-center text-xs text-black uppercase font-semibold border-opacity-0 border-b border-gray hover:border-opacity-100 opacity-75 hover:opacity-100 hover:text-purple " +
                      NAVIGATION_ANIMATION
                    }
                    href="/"
                  >
                    <span className="font text-lg">{page.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
      </nav>
    </>
  );
}