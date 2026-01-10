"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Productcard from "./Productcard";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const PreArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden sm:flex"
  >
    <FaArrowLeft size={18} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden sm:flex"
  >
    <FaArrowRight size={18} />
  </button>
);

export default function CardCarousel({ title, cards }) {
  const [mounted, setMounted] = useState(false);
  const [slides, setSlides] = useState(4);

  useEffect(() => {
    setMounted(true);

    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 640) setSlides(1);
      else if (width < 768) setSlides(2);
      else if (width < 1024) setSlides(3);
      else setSlides(4);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  if (!mounted) return null;

  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: slides > 1,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
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
}
