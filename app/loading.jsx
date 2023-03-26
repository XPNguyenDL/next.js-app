import React from 'react'
import "@/src/styles/loading.scss";

export default function loading() {
  return (
          <div class="loader flex h-screen text items-center justify-center bg-white m-0 p-0 z-[999]">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
  )
}
