"use client";

import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

import everyday from "@/public/assets/images/home/everyday.webp";
import sliderManga from "@/public/assets/images/home/sliderManga.webp";

const sliders = [
  {
    url: "https://file.hstatic.net/200000294254/file/panda_991c0f531ab741b6b66dca2614d6db0a.jpg"
  },
  {
    url: "https://file.hstatic.net/200000294254/file/everyday_7592b4724863409f865a5ee3db54b14b.jpg"
  },
  {
    url: "https://akko.com.vn/wp-content/uploads/2023/03/akko-3098B-banner-ngang-01.jpg"
  }
];

export default function Slider() {
  /**
   * UseState function
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Handle function
   */

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (sliderIndex) => {
    setCurrentIndex(sliderIndex);
  };

  /**
   * UseEffect function
   */
  return (
    <div className="group relative m-auto h-[280px] w-full max-w-[100%] py-16 lg:h-[640px] xl:h-[780px]">
      <div className="h-full w-full overflow-hidden bg-center">
        <div
          style={{
            backgroundImage: `url(${sliders[currentIndex].url})`,
            backgroundRepeat: "no-repeat"
          }}
          className="h-full w-full bg-cover bg-center duration-700 group-hover:scale-105"></div>
      </div>
      <div
        className="absolute top-[50%] left-6 hidden -translate-x-0 -translate-y-[50%] cursor-pointer rounded-full p-2 text-2xl hover:bg-black/20 hover:text-white group-hover:block"
        onClick={prevSlide}>
        <BsChevronLeft size={30} />
      </div>
      <div
        className="absolute top-[50%] right-6 hidden -translate-x-0 -translate-y-[50%] cursor-pointer rounded-full p-2 text-2xl hover:bg-black/20 hover:text-white group-hover:block"
        onClick={nextSlide}>
        <BsChevronRight size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {sliders.map((slider, sliderIndex) => (
          <div
            key={sliderIndex}
            className="cursor-pointer text-2xl"
            onClick={() => goToSlide(sliderIndex)}>
            {sliderIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
}
