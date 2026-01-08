"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../lib/wishlistSlice";
import { addToCart } from "../lib/cartSlice";
import { calculatePrice } from "../lib/calculatePrice";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items || []);

  const removeItem = (id) => dispatch(removeFromWishlist(id));

  const addToCartHandler = (item) =>
    dispatch(addToCart({ ...item, quantity: 1 }));

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Wishlist
      </h1>
      <p className="text-gray-600 mb-6">
        {wishlist.length} {wishlist.length === 1 ? "item" : "items"} in your wishlist
      </p>

      <div className="w-full">
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
          {wishlist.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-700">Your wishlist is empty</p>
              <Link
                href="/products"
                className="mt-4 inline-block bg-[#a91f64] text-white px-4 py-2 rounded-md hover:bg-[#8a1b54] text-sm sm:text-base"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-gray-700 font-semibold mb-4">
                <div>Product</div>
                <div>Price</div>
                <div>Stock</div>
                <div>Actions</div>
              </div>

              {wishlist.map((item, index) => (
                <div
                  key={item.id ?? index}
                  className={`flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-start sm:items-center py-4 ${
                    index < wishlist.length - 1 ? "border-b border-gray-300" : ""
                  }`}
                >
                  {/* Product info */}
                  <div className="flex items-center gap-4 w-full">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.text}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium text-sm sm:text-base">
                        {item.text}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.category}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.weight}g
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-gray-700 text-sm sm:text-base flex justify-between w-full sm:block pl-2.5">
                    <span className="sm:hidden font-semibold">Price:</span>
                    Rs. {Math.round(calculatePrice(item.weight)).toLocaleString()}
                  </div>

                  {/* Stock */}
                  <div className="text-sm sm:text-base flex flex-cols w-full sm:block">
                    <span className="sm:hidden text-xs font-medium text-gray-600">
                      Stock:
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold ${
                        item.inStock ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.inStock ? "In stock" : "Out of stock"}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <span className="sm:hidden text-xs font-medium text-gray-600">
                      Actions:
                    </span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => addToCartHandler(item)}
                        disabled={!item.inStock}
                        className="bg-[#a91f64] text-white px-3 py-1.5 sm:py-2 rounded-md hover:bg-[#8a1b54] disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
                      >
                        Add to cart
                      </button>
                      <FaTrash
                        onClick={() => removeItem(item.id)}
                        className="hidden sm:block text-gray-500 hover:text-red-500 cursor-pointer text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
