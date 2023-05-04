import FooterAside from "./components/FooterAside";
import {
  BsFacebook,
  BsInstagram,
  BsGoogle,
  BsGithub,
  BsTwitter
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left ">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500">
        <div className="flex justify-center container ">
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <BsFacebook size={16} />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <BsInstagram size={16} />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <BsGoogle size={16} />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <BsGithub size={16} />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <BsTwitter size={16} />
          </a>
        </div>
      </div>
      <FooterAside />
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400 hover:text-purple"
          href="/#"
        >
          Manga Store
        </a>
      </div>
    </footer>
  );
}
