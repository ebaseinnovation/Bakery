import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image1 from "../assets/gallery/bg-image1.jpg";
import image2 from "../assets/gallery/bg-image2.jpg";
import image3 from "../assets/gallery/bg-image3.jpg";
import image4 from "../assets/gallery/bg-image4.jpg";
import image5 from "../assets/gallery/bg-image5.jpg";

const HomeSlider = () => {
  const slides = [image1, image2, image3, image4, image5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const interval = setInterval(function () {
        setCount(count + 1);
        nextSlide();
      }, 3500);

      return function () {
        clearTimeout(interval);
      };
    },
    [count]
  );

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    // <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
    <div className=" w-full relative group">
      <div
      //   style={{ backgroundImage: `url(${slides[currentIndex].url})` }}

      // className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <img src={slides[currentIndex]} alt="/" className="w-full mt-0" />
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default HomeSlider;
