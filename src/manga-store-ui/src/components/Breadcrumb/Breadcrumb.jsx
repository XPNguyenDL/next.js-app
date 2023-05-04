import Link from "next/link";                           
import { RiHome2Line } from "react-icons/ri";

export default function Breadcrumb({ href, prePlace, currentPlace }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="container mx-auto inline-flex h-[80px] items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-400 inline-flex items-center text-sm font-medium dark:hover:text-white">
            <RiHome2Line className="mr-2" size={16} />
            Trang chủ
          </Link>
        </li>
        {href ? (
          <li>
            <div className="flex items-center">
            <p className="mr-2">/</p>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-400 ml-1 text-sm font-medium dark:hover:text-white md:ml-2">
                Projects
              </a>
            </div>
          </li>
        ) : null}

        <li aria-current="page">
          <div className="flex items-center">
            <p className="mr-2">/</p>
            <span className="text-gray-500 dark:text-gray-400 ml-1 text-sm font-medium md:ml-2">
              {currentPlace}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
