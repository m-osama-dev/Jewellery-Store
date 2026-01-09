"use client";

import Image from "next/image";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, removeFromCart } from "../lib/cartSlice";
import { addToWishlist, removeFromWishlist } from "../lib/wishlistSlice";

const Productcard = ({ id, image, text, weight, category, inStock }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = cartItems.some((item) => item.id === id);
  const isInWishlist = wishlistItems.some((item) => item.id === id);

  const numericWeight =
    typeof weight === "string"
      ? parseFloat(weight.replace("g", "").trim()) || 0
      : Number(weight) || 0;

  const handleToggleWishlist = async () => {
    try {
      const authRes = await fetch("/api/check-auth", {
        credentials: "include",
      });

      const data = await authRes.json();
      if (!data.authenticated) {
        toast.error("Login First");
        return;
      }

      if (isInWishlist) {
        await fetch("/api/wishlist/remove", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId: id }),
          credentials: "include",
        });
        dispatch(removeFromWishlist(id));
        toast.error("Removed from wishlist");
      } else {
        await fetch("/api/wishlist/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: id,
            image,
            text,
            weight: numericWeight,
            category,
            inStock,
          }),
          credentials: "include",
        });
        dispatch(
          addToWishlist({
            id,
            image,
            text,
            weight: numericWeight,
            category,
            inStock,
          })
        );
        toast.success("Added to wishlist");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleToggleCart = async () => {
    try {
      const authRes = await fetch("/api/check-auth", {
        credentials: "include",
      });

      const data = await authRes.json();
      if (!data.authenticated) {
        toast.error("Login First");
        return;
      }

      if (isInCart) {
        await fetch("/api/cart/remove", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId: id }),
          credentials: "include",
        });
        dispatch(removeFromCart(id));
        toast.error("Removed from cart");
      } else {
        await fetch("/api/cart/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: id,
            image,
            text,
            weight: numericWeight,
            quantity: 1,
            category,
            inStock,
          }),
          credentials: "include",
        });
        dispatch(
          addToCart({
            id,
            image,
            text,
            weight: numericWeight,
            quantity: 1,
            category,
            inStock,
          })
        );
        toast.success("Added to cart");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          fill
          alt={text}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 px-4 py-3">
        <h3 className="text-base font-semibold text-gray-800 truncate">
          {text}
        </h3>

        <div className="flex justify-between items-center mt-auto pt-3">
          <span className="text-sm font-bold text-gray-700">
            {numericWeight}g
          </span>

          <div className="flex space-x-3">
            <FaHeart
              className={`cursor-pointer ${
                isInWishlist
                  ? "text-red-500"
                  : "text-gray-600 hover:text-red-500"
              }`}
              onClick={handleToggleWishlist}
            />
            <FaShoppingCart
              className={`cursor-pointer ${
                isInCart
                  ? "text-green-500"
                  : "text-gray-600 hover:text-green-500"
              }`}
              onClick={handleToggleCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
