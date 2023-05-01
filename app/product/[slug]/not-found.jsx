import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="mt-16">
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold tracking-widest text-white">404</h1>
        <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">
          Page Not Found
        </div>
        <button className="mt-5">
          <a className="active:text-orange-500 group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="border-current relative block border bg-[#1A2238] px-8 py-3">
              <Link href="/">Go Home</Link>
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}
