import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import "@/src/styles/animation.scss";

export default function CategoryItem({ path, image, title }) {
  return (
    <figure class="snip0011 group">
      <Image src={image} alt="sample1" />
      <div>
        <a href="#"
        className="h-full left-0 absolute top-0 w-full text-white">
            <div className="opacity-0 relative left-[45%] top-[65%] group-hover:top-[45%] group-hover:opacity-80 duration-500">
                <BsSearch size={30} />
            </div>
        </a>
      </div>
    </figure>
  );
}
