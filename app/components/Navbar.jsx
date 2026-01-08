"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaTruck,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { GOLD_RATE } from "../lib/goldRate";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const wishlistItemsCount = wishlistItems.length;

  const oneTolaRate = `Rs. ${GOLD_RATE.perTola24K.toLocaleString()} per Tola (24K)`;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();
        setLoggedIn(data.loggedIn);
      } catch {
        setLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 px-4 md:px-8 py-3 bg-slate-50 flex items-center justify-between shadow-sm">
      {/* Left: Logo */}
      <Link href="/" className="flex flex-col leading-tight">
        <span className="text-lg md:text-2xl font-bold text-[#a91f64]">
          Haroon
        </span>
        <span className="text-xs md:text-sm text-gray-500 self-center tracking-widest">
          Jewellery Store
        </span>
      </Link>

      {/* Center: Rate + Links */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center">
        <div className="text-[#a91f64] font-semibold text-xs md:text-sm mb-2 md:mb-0 md:mr-8">
          {oneTolaRate}
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-[#a91f64]">Home</Link></li>
          <li><Link href="/about" className="hover:text-[#a91f64]">About</Link></li>
          <li><Link href="/products" className="hover:text-[#a91f64]">Products</Link></li>
          <li className="hover:text-[#a91f64] cursor-pointer">New Arrivals</li>
          <li className="hover:text-[#a91f64] cursor-pointer">Top Sellers</li>
        </ul>
      </div>

      {/* Right: Icons + Auth */}
      <div className="flex items-center gap-5 text-gray-700 text-xl">
        <FaTruck className="hover:text-[#a91f64]" />

        <Link href="/wishlist" className="relative">
          <FaHeart className="hover:text-[#a91f64]" />
          {wishlistItemsCount > 0 && (
            <span className="absolute -top-3 -right-3 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5">
              {wishlistItemsCount}
            </span>
          )}
        </Link>

        <Link href="/cart" className="relative">
          <FaShoppingCart className="hover:text-[#a91f64]" />
          {cartItemCount > 0 && (
            <span className="absolute -top-3 -right-3 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5">
              {cartItemCount}
            </span>
          )}
        </Link>

        {/* Auth Buttons */}
        {!loggedIn ? (
          <div className="hidden md:flex items-center gap-3 ml-4">
            <Link
              href="/auth/login"
              className="text-sm font-medium border border-[#a91f64] text-[#a91f64] px-3 py-1.5 rounded-md hover:bg-[#a91f64] hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm font-medium bg-[#a91f64] text-white px-3 py-1.5 rounded-md hover:bg-[#901956] transition"
            >
              Signup
            </Link>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className="hidden md:block text-sm font-medium bg-[#a91f64] text-white px-3 py-1.5 rounded-md hover:bg-[#901956] transition ml-4"
          >
            Logout
          </button>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 text-gray-700 font-medium md:hidden shadow-md">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/products" onClick={toggleMenu}>Products</Link></li>
          <li className="cursor-pointer" onClick={toggleMenu}>New Arrivals</li>
          <li className="cursor-pointer" onClick={toggleMenu}>Top Sellers</li>

          <div className="flex gap-4 mt-2">
            {!loggedIn ? (
              <>
                <Link
                  href="/auth/login"
                  onClick={toggleMenu}
                  className="text-sm border border-[#a91f64] text-[#a91f64] px-3 py-1 rounded-md hover:bg-[#a91f64] hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={toggleMenu}
                  className="text-sm bg-[#a91f64] text-white px-3 py-1 rounded-md hover:bg-[#901956] transition"
                >
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-sm bg-[#a91f64] text-white px-3 py-1 rounded-md hover:bg-[#901956] transition"
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
