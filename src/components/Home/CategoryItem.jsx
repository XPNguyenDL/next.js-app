import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import "@/src/styles/animation.scss";

export default function CategoryItem({ path, image, title }) {
  return (
    <div className="group m-2 ">
      <div className="overflow-hidden relative">
      <Link href={""} className="w-full h-full bg-center"
        title={`${title}`}
        >
          <Image src={image} alt='category-image' className='invisible'/>
          <Image src={image} alt="sample1" className="absolute top-0 w-full group-hover:scale-105 duration-500 w-full h-full" />
        </Link>
      </div>
    </div>
  );
}
