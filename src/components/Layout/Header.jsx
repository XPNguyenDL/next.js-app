import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/icons/neko-logo.svg";
import Sidebar from "./components/Sidebar";

const pages = [
  {
    name: "Trang chủ",
    path: "/"
  },
  {
    name: "Tin tức",
    path: "/"
  },
  {
    name: "Cửa hàng",
    path: "/collections"
  },
  {
    name: "Manga",
    path: "/"
  },
  {
    name: "Light novel",
    path: "/"
  }
];

export default function Head() {
  return (
    <nav className="flex fixed top-0 left-0 w-full h-[var(--header-height)] bg-white-opacity shadow-lg z-40">
      <div className="container px-4 h-[var(--header-height)] mx-auto flex flex-wrap items-center justify-end xl:justify-between">
        <Sidebar pages={pages} />
        <div className="lg:w-auto lg:static lg:block lg:justify-start">
          <Link className="flex items-center" href="/">
            <Image src={Logo} className="max-w-[90px] max-h-[60px] object-cover" alt="brand-logo" />
          </Link>
        </div>
        <Navbar pages={pages} />
      </div>
    </nav>
  );
}
