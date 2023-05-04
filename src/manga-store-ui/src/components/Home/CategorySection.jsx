import manga from '@/public/assets/images/home/manga.webp';
import lightnovel from '@/public/assets/images/home/lightnovel.webp';
import novel from '@/public/assets/images/home/novel.webp';
import childrenbook from '@/public/assets/images/home/childrenbook.webp';
import SectionHeader from "./SectionHeader";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    path: '/',
    image: manga,
    title: 'Truyện tranh',
  },
  {
    path: '/',
    image: lightnovel,
    title: 'Light Novel',
  },
  {
    path: '/',
    image: novel,
    title: 'Tiểu thuyết',
  },
  {
    path: '/',
    image: childrenbook,
    title: 'Sách thiếu nhi',
  },
];

export default function CategorySection() {
  return (
    <div className="mx-auto px-6 md:px-10 max-w-screen-2xl">
      <SectionHeader title="Danh mục" />
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-center gap-3 w-[160vw] md:w-[110vw] lg:w-full xl:w-10/12 mx-auto">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
