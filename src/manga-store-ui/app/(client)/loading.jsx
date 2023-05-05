import React from "react";
import "@/src/styles/loading.scss";

export default function loading() {
  return (
    <div className="w-srceen text fixed top-0 left-0 bottom-0 right-0 z-[999] m-0 flex h-screen items-center justify-center bg-white p-0">
    <div className="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  );
}
