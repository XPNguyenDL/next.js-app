import Link from 'next/link'
import React from 'react'

export default function Navigate({ action, endpoint}) {
  return (
    <div className="bg-brown-light">
        <div className="container mx-auto flex">
          <Link href="/">Trang chủ</Link> \
          <Link href="/">Trang chủ</Link> \
          <Link href="/">Trang chủ</Link>

        </div>
      </div>
  )
}
