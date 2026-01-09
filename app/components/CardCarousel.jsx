"use client";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Productcard from "./Productcard";

const PreArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black shadow-md p-2 rounded-full hover:bg-[#a91f64] hover:text-white z-10"
  >
    <FaArrowLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black shadow-md p-2 rounded-full hover:bg-[#a91f64] hover:text-white z-10"
  >
    <FaArrowRight size={20} />
  </button>
);

const CardCarousel = ({ title, cards }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
          <div key={index} className="px-1">
            <Productcard {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
