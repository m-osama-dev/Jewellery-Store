import React from "react";
import { products } from "../../data/data.json";
import CardCarousel from "./CardCarousel";

const NewArrivels = () => {
  // Map only necessary fields from data.json
  const cards = products.slice(0, 8).map((item) => ({
    id: item.id,
    image: item.image,
    text: item.text,
    weight: item.weight,
    category: item.category,
    inStock: item.inStock,
  }));

  return (
    <div>
      <CardCarousel title="New Arrivels" cards={cards} />
    </div>
  );
};

export default NewArrivels;
