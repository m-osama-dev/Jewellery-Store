"use client";

import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Productcard from "./Productcard";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const PreArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black shadow-md p-2 rounded-full hover:bg-[#a91f64] hover:text-white z-10 hidden sm:flex"
  >
    <FaArrowLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black shadow-md p-2 rounded-full hover:bg-[#a91f64] hover:text-white z-10 hidden sm:flex"
  >
    <FaArrowRight size={20} />
  </button>
);

const CardCarousel = ({ title, cards }) => {
  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
          {title}
        </h2>
        <Link href="/products" className="text-lg hover:text-[#a91f64]">
          View More
        </Link>
      </div>

      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <Productcard {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
