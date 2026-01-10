"use client";
import React from "react";
import slider1 from "../../public/images/slider1.jpg";
import slider2 from "../../public/images/slider2.jpg";
import slider3 from "../../public/images/slider3.jpg";
import Slider from "react-slick";
import Image from "next/image";
const SliderComponent = () => {
  const setting = {
    infinite: true,
    speed: 500,
    slidestoshow: 1,
    slidestoscroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
  };
  const slides = [slider1, slider2, slider3];
  return (
    <>
      <div className="w-full mx-auto my-8">
        <Slider {...setting}>
          {slides.map((slides, index) => (
            <div key={index} className="relative">
              <div className="relative h-[300px] sm:h-[500px] w-full">
                <Image src={slides} fill alt="" className="rounded-3xl object-cover" />
                <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
                {/* overlay for each slide  */}
                {index === 0 && (
                  <div className="absolute inset-0 flex justify-center md:justify-start">
                    <div className="pl-0  sm:pl-5 h-full flex flex-col justify-center items-center space-y-4">
                        <span className="text-white text-3xl md:text-7xl font-extrabold uppercase text-center">hot offers</span>
                        <span className="text-[#a91f64] text-4xl md:text-9xl font-bold text-center">50%</span>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute inset-0 text-white flex justify-center items-center">
                    <div className="text-center space-y-2">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light items-start">New</h1>
                        <h1 className="text-[#a91f64] text-4xl sm:text-6xl lg:text-9xl font-semi-bold">collections...</h1>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light flex justify-end">2026</h1>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute inset-0  flex items-center justify-center md:justify-end pr-10">
                    <div className="w-full pl-4 md:pl-15 flex flex-col items-start space-y-3">
                        <span className="text-[#a91f64] text-4xl md:text-9xl font-extrabold uppercase text-center leading-none">Deal</span>
                        <span className="text-xl md:text-5xl font-semibold uppercase py-1 sm:py-2 text-center bg-white text-black w-fit px-1 sm:px-4">of the week</span>
                        <span className="text-white text-sm  md:text-base text-center ">Limited Time Only - Grab It Now</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;
