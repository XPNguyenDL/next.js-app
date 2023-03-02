import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/icons/neko-logo.svg";

export default function Head() {

  
  

  return (
    <div className="bg-primary-100 drop-shadow">
      <div className=" container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="inline-block"
            href="/"
          >
            <Image
              src={Logo}
              className="max-w-[90px]"
              alt="brand-logo"
            />
          </Link>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
