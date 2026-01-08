import React from "react";
import { products } from "./../../data/data.json";
import CardCarousel from "./CardCarousel";

const TopSeller = () => {
  const cards = products.slice(4, 12).map((item) => ({
    id: item.id,
    image: item.image,
    text: item.text,
    weight: item.weight,
    category: item.category,
    inStock: item.inStock,
  }));

  return (
    <div>
      <CardCarousel title="Top Sellers" cards={cards} />
    </div>
  );
};

export default TopSeller;
