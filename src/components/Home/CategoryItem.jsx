import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import "@/src/styles/animation.scss";

export default function CategoryItem({ path, image, title }) {
  return (
    <figure class="snip1212 group">
      <Image src={image} alt="sample1" className="w-full hover:opacity-40" />
      <figcaption>
        <h2 className="group-hover:text-white">{title}</h2>
        <p>Xem thêm</p>
      </figcaption>
    </figure>
  );
}
