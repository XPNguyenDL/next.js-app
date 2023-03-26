import Description from "@/src/components/Home/Description";
import CategorySection from "@/src/components/Home/CategorySection";
import NewProduct from "@/src/components/Home/NewProduct";
import Slider from "@/src/components/Slider/Slider";

export const metadata = {
  title: "Trang chủ",
};

export default function Home() {
  return (
    <div>
      <Slider/>
      <CategorySection />
      <NewProduct/>
      <Description />
    </div>
  );
}
