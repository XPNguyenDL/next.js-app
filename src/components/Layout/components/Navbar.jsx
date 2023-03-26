import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";

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
    path: "/"
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

export default function Navbar() {
  /**
   * Amination
   */
  const NAVIGATION_ANIMATION =
    "after:transition-all after:transform after:duration-700 before:transition-all before:transform before:duration-700";

  const NAVIGATION_BEFORE =
    "before:absolute before:h-[2px] before:w-[35%] before:bg-purple before:top-0 before:left-0 before:opacity-0 hover:before:opacity-100 hover:before:left-[65%]";
  const NAVIGATION_AFTER =
    "after:absolute after:h-[2px] after:w-[35%] after:bg-purple after:right-0 after:bottom-0 after:opacity-0 hover:after:opacity-100 hover:after:right-[65%]";

  /**
   * UseState function
   */

  /**
   * Handle function
   */

  /**
   * UseEffect function
   */

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 mt-1 mb-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="lg:flex items-center" id="example-navbar-danger">
            <ul className="hidden xl:flex lg:flex-row list-none lg:ml-auto">
              {pages.map((page, index) => (
                <li
                  className={`nav-item mx-2 inline-block relative ${NAVIGATION_BEFORE} ${NAVIGATION_AFTER} ${NAVIGATION_ANIMATION}`}
                  key={index}
                >
                  <Link
                    className="p-2 flex items-center text-xs text-black uppercase font-semibold hover:opacity-100 hover:text-purple transform"
                    href="/"
                  >
                    <span className="font text-lg">{page.name}</span>
                  </Link>
                </li>
              ))}
              <li
                className={`nav-item mx-2 flex relative items-center ${NAVIGATION_ANIMATION}`}
              >
                <Link
                  className="flex hover:opacity-100 hover:text-purple transform"
                  href="/"
                >
                  <CgProfile size={24} />
                </Link>
              </li>
              <li
                  className={`nav-item mx-2 flex relative items-center ${NAVIGATION_ANIMATION}`}
                  
                >
                  <Link
                    className="flex hover:opacity-100 hover:text-purple transform"
                    href="/cart"
                  >
                    <RiShoppingCart2Line size={24}/>
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
