"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";


export default function Sidebar({ pages }) {
  /**
   * UseState function
   */
  const [isClosed, setIsCLosed] = useState(true);

  /**
   * Handle function
   */
  const handleCloseSidebar = () => {
    setIsCLosed(true);
  };
  const handleOpenSidebar = () => {
    setTimeout(() => setIsCLosed(false), 700);
  };

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth >= 1280) handleCloseSidebar();
    };
  }, []);
  return (
    <div className="mr-auto lg:hidden z-50">
      <button
        className="flex xl:hidden items-center justify-center "
        onClick={handleOpenSidebar}
      >
        <AiOutlineMenu className="py-4 w-[var(--header-height)] h-[var(--header-height)] hover:fill-purple" />
      </button>
      <div
        className={isClosed ? null : "bg-gray-light absolute w-screen h-screen top-0"}
        onClick={(events) => {
          handleCloseSidebar(events);
        }}
      ></div>
      <div
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 w-48 sm:w-60 h-screen transition-all transform duration-500 animation-slide-in opacity-0 ${
          isClosed ? "-translate-x-full" : "translate-x-0 opacity-100"
        }`}
        aria-label="Sidebar"
      >
        <div className="bg-secondary-100 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
          <ul className="space-y-2 h-full">
            {pages.map((page, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={
                    "p-3 flex items-center text-xs text-black uppercase font-semibold border-opacity-0 border-b border-gray hover:border-opacity-100 opacity-75 hover:opacity-100 hover:text-purple"
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
    </div>
  );
}
