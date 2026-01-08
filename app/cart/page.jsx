"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../lib/cartSlice";
import Link from "next/link";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { calculatePrice } from "../lib/calculatePrice"; // ✅ import your calculatePrice function

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  const handleUpdatedQuantity = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const removeItem = (id) => dispatch(removeFromCart(id));

  // ✅ Use the imported calculatePrice
  const subtotal = cartItems.reduce(
    (sum, item) => sum + calculatePrice(item.weight) * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Shopping Bag
      </h1>
      <p className="text-gray-600 mb-6">
        {totalItems} {totalItems === 1 ? "item" : "items"} in the bag
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-gray-700">Your cart is empty</p>
                <Link
                  href="/products"
                  className="mt-4 inline-block bg-[#a91f64] text-white px-4 py-2 rounded-md hover:bg-[#8a1b54] text-sm sm:text-base"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <>
                <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 text-gray-700 font-semibold mb-4">
                  <div>Product</div>
                  <div>Price (PKR)</div>
                  <div>Quantity</div>
                  <div>Total</div>
                </div>

                {cartItems.map((item, index) => {
                  const unitPrice = calculatePrice(item.weight);
                  const totalPrice = unitPrice * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-start sm:items-center py-4 ${
                        index < cartItems.length - 1
                          ? "border-b border-gray-400"
                          : ""
                      }`}
                    >
                      {/* Product Info */}
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

                      {/* Unit Price */}
                      <div className="text-gray-700 text-sm sm:text-base flex justify-between w-full sm:block pl-2.5">
                        <span className="sm:hidden font-semibold">Price:</span>
                        Rs. {Math.round(unitPrice).toLocaleString()}
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center w-full sm:w-auto">
                        <span className="sm:hidden font-semibold mr-44 sm:mr-2">
                          Qty
                        </span>
                        <button
                          className="w-5 h-6 pb-1 flex items-center justify-center bg-transparent border-2 border-gray-400 rounded-lg hover:bg-gray-300 text-black text-2xl cursor-pointer"
                          onClick={() => handleUpdatedQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="w-7 sm:w-8 text-center text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          className="w-5 h-6 pb-1 flex items-center justify-center bg-transparent border-2 border-gray-400 rounded-lg hover:bg-gray-300 text-black text-xl cursor-pointer"
                          onClick={() => handleUpdatedQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      {/* Total per Item */}
                      <div className="text-gray-700 text-sm sm:text-base flex justify-between w-full sm:block pl-4">
                        <span className="sm:hidden font-semibold">Total:</span>
                        Rs. {Math.round(totalPrice).toLocaleString()}
                      </div>

                      {/* Remove */}
                      <div className="self-center sm:self-auto">
                        <FaTrash
                          className="text-gray-500 hover:text-red-500 cursor-pointer text-sm sm:text-base"
                          onClick={() => removeItem(item.id)}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* Right Section - Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              Cart Summary
            </h3>

            <div className="border-t pt-4">
              <div className="flex justify-between text-gray-700 mb-2 text-sm sm:text-base">
                <span>Total</span>
                <span>Rs. {Math.round(subtotal).toLocaleString()}</span>
              </div>

              <button
                className="w-full mt-4 bg-[#a91f64] text-white hover:bg-[#8a1b54] px-4 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer"
                disabled={cartItems.length === 0}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
