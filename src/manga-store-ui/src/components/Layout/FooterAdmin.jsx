import Link from "next/link";


export default function FooterAdmin() {
  return (
    <footer className="text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 bg-white text-center lg:text-left ">
      <div className="bg-neutral-200 dark:bg-neutral-700 p-6 text-center">
        <span>© 2023 Copyright: </span>
        <Link
          className="text-neutral-600 dark:text-neutral-400 font-semibold hover:text-purple"
          href="/#">
          Manga Store
        </Link>
      </div>
    </footer>
  );
}
