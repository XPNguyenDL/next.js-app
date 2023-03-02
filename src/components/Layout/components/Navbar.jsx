"use client";

import Image from "next/image";
import Link from "next/link";
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
    "transition transform duration-500 ease-in-out hover:-translate-y-1";

  /**
   * Component's event handlers
   */
  const [mobileMode, setMobileMode] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  /**
   * Component's event handlers
   */
  const handleOpenMobileNavbar = () => {
    setIsClosing(false);
    setMobileMode(false);
   
  };

  useEffect(() => {
    
    window.onresize = () => {
      console.log(window.innerWidth < 1280);
      setMobileMode(window.innerWidth <= 1280);
    };
  }, []);

  useEffect(() => {
      setMobileMode(window.innerWidth <= 1280);
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 mt-1 mb-1" >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          {!mobileMode ? (
            <div className="lg:flex items-center" id="example-navbar-danger">
              <ul className="flex lg:flex-row list-none lg:ml-auto">
                {pages.map((page, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className={
                        "p-3 flex items-center text-xs uppercase font-semibold border-opacity-0 border-b border-gray hover:border-opacity-100 hover:opacity-75" +
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
          ) : null}
          {mobileMode ? (
            <></>
          ) : null}
        </div>
      </nav>
    </>
  );
}
