"use client";
import React from "react";
import { categories } from "../../data/data.json";
import Image from "next/image";
import Link from "next/link";
const Categories = () => {
  return (
    <div className="mx-auto my-8 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="group relative w-full h-80 flex flex-col justify-end overflow-hidden rounded-2xl "
        >
          <Image
            src={category.image}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="z-0 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 pb-6 text-center">
            <Link href="/products">
              <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black shadow-md cursor-pointer hover:bg-[#a91f64] hover:text-white">
                {category.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
