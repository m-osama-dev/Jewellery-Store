"use client";
import Image from "next/image";
import React from "react";
import { FaCheck, FaHeart, FaShoppingCart } from "react-icons/fa";
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
    const authenticationResponse = await fetch("/api/check-auth", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await authenticationResponse.json();
    if (!data.authenticated) {
      toast.error("Login First");
      return;
    }

    if (isInWishlist) {
      // Remove from wishlist
      await fetch("/api/wishlist/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id }),
        credentials: "include",
      });
      dispatch(removeFromWishlist(id));
      toast.error("Removed from wishlist");
    } else {
      // Add to wishlist
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
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  }
};

const handleToggleCart = async () => {
  try {
    const authenticationResponse = await fetch("/api/check-auth", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // important for cookie-based auth
    });

    const data = await authenticationResponse.json();
    if (!data.authenticated) {
      toast.error("Login First");
      return;
    }

    if (isInCart) {
      // Remove from cart
      await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id }),
        credentials: "include",
      });
      dispatch(removeFromCart(id));
      toast.error("Removed from cart");
    } else {
      // Add to cart
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
      dispatch(addToCart({
        id,
        image,
        text,
        weight: numericWeight,
        quantity: 1,
        category,
        inStock,
      }));
      toast.success("Added to cart");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  }
};


  return (
    <div className="bg-white rounded-lg shadow-md overflow-visible flex flex-col h-[280px]">
      <div className="relative w-full h-[200px]">
        <Image src={image} fill alt={text} style={{ objectFit: "cover" }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 px-4 py-3 m-0">
        {text}
      </h3>
      <div className="flex justify-between items-center px-4 pt-0 pb-4 m-0">
        <span className="text-lg font-bold text-gray-700">
          {numericWeight}g
        </span>
        <div className="flex space-x-3">
          <FaHeart
            className={`cursor-pointer ${
              isInWishlist ? "text-red-500" : "text-gray-600 hover:text-red-500"
            }`}
            onClick={handleToggleWishlist}
          />
          <FaShoppingCart
            className={`cursor-pointer ${
              isInCart ? "text-green-500" : "text-gray-600 hover:text-green-500"
            }`}
            onClick={handleToggleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Productcard;
