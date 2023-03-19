"use client";

import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

import everyday from '@/public/assets/images/home/everyday.webp';
import sliderManga from '@/public/assets/images/home/sliderManga.webp';

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
    <div className="relative max-w-[100%] h-[280px] lg:h-[640px] xl:h-[780px] w-full m-auto py-16 group">
      
        <div
          className="w-full h-full bg-center overflow-hidden"
        >
           <div
          style={{ backgroundImage: `url(${sliders[currentIndex].url})` , backgroundRepeat: 'no-repeat'}}
          className="w-full h-full bg-center bg-cover duration-700 group-hover:scale-105"
        ></div>
        </div>
       
      <div
        className="hidden group-hover:block absolute top-[50%] hover:text-white -translate-x-0 -translate-y-[50%] left-6 text-2xl rounded-full p-2 hover:bg-black/20 cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronLeft size={30} />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] hover:text-white -translate-x-0 -translate-y-[50%] right-6 text-2xl rounded-full p-2 hover:bg-black/20 cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronRight size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((slider, sliderIndex) => (
          <div key={sliderIndex} className="text-2xl cursor-pointer" onClick={() => goToSlide(sliderIndex)}>
            {sliderIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
}
