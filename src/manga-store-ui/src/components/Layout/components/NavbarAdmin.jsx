"use client";

import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import CartSidebar from "../../Cart/CartSidebar";
import { useState } from "react";
import UseReduce from "@/src/reducers/UseReduce";

export default function NavbarAdmin({ pages }) {
  /**
   * Amination
   */
  const NAVIGATION_ANIMATION =
    "after:transition-all after:transform after:duration-700 before:transition-all before:transform before:duration-700";

  const NAVIGATION_BEFORE =
    "before:absolute before:h-[2px] before:w-[35%] before:bg-purple before:top-0 before:left-0 before:opacity-0 hover:before:opacity-100 hover:before:left-[65%]";
  const NAVIGATION_AFTER =
    "after:absolute after:h-[2px] after:w-[35%] after:bg-purple after:right-0 after:bottom-0 after:opacity-0 hover:after:opacity-100 hover:after:right-[65%]";


  return (
    <>
      <nav className="relative mt-1 mb-1 flex flex-wrap items-center justify-between px-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="items-center lg:flex" id="example-navbar-danger">
            <ul className="hidden list-none lg:ml-auto lg:flex-row xl:flex">
              {pages.map((page, index) => (
                <li
                  className={`nav-item relative mx-2 inline-block ${NAVIGATION_BEFORE} ${NAVIGATION_AFTER} ${NAVIGATION_ANIMATION}`}
                  key={index}>
                  <Link
                    className="flex transform items-center p-2 text-xs font-semibold uppercase text-black hover:text-purple hover:opacity-100"
                    href={page.path}>
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
