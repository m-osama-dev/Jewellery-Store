"use client";
import React, { useState } from "react";
import data from "../../data/data.json";
import Productcard from "../components/Productcard";
import { FaTimes } from "react-icons/fa";

const ProductsPage = () => {
  const [isFilterModelOpen, setIsFilterModelOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");
  const [filters, setFilters] = useState({
    category: [],
    availability: [],
  });

  // Extract all unique categories dynamically
  const uniqueCategories = [
    ...new Set(data.products.map((p) => p.category)),
  ].sort();

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value],
    }));
  };

  // Convert weight like "22g" to numeric 22 for sorting
  const parseWeight = (weight) =>
    parseFloat(weight.replace(/[^\d.]/g, "")) || 0;

  // Apply filters
  const filteredProducts = data.products.filter((product) => {
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.includes(product.category);

    const availabilityMatch =
      filters.availability.length === 0 ||
      filters.availability.includes(
        product.inStock ? "In Stock" : "Out of Stock"
      );

    return categoryMatch && availabilityMatch;
  });

  // Sorting logic
  let sortedProducts = [...filteredProducts];
  if (sortOrder === "weight-low") {
    sortedProducts.sort((a, b) => parseWeight(a.weight) - parseWeight(b.weight));
  } else if (sortOrder === "weight-high") {
    sortedProducts.sort((a, b) => parseWeight(b.weight) - parseWeight(a.weight));
  } else if (sortOrder === "name") {
    sortedProducts.sort((a, b) => a.text.localeCompare(b.text));
  }

  const handleSort = (order) => setSortOrder(order);

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4 max-[774px]:my-8 max-[774px]:px-3">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 max-[774px]:text-xl">
        Products
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar filter for desktop */}
        <div className="hidden min-[774px]:block w-full md:w-1/4 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Filter Options
          </h3>

          <div className="space-y-6">
            {/* Dynamic Category Filter */}
            <div>
              <h4 className="text-lg font-medium text-gray-700">Category</h4>
              {uniqueCategories.map((category) => (
                <label key={category} className="block mt-3">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.category.includes(category)}
                    onChange={() => handleFilterChange("category", category)}
                  />
                  {category}
                </label>
              ))}
            </div>

            {/* Availability Filter */}
            <div>
              <h4 className="text-lg font-medium text-gray-700">Availability</h4>
              {["In Stock", "Out of Stock"].map((avail) => (
                <label key={avail} className="block mt-3">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.availability.includes(avail)}
                    onChange={() => handleFilterChange("availability", avail)}
                  />
                  {avail}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-3/4">
          {/* Top sort bar */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-gray-800">
              Products List ({sortedProducts.length})
            </h1>
            <div className="hidden min-[774px]:flex items-center gap-3">
              <span className="text-gray-700 font-medium">Sort By:</span>
              <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64]"
              >
                <option value="default">Newest</option>
                <option value="weight-low">Weight: Low to High</option>
                <option value="weight-high">Weight: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Modal */}
          {isFilterModelOpen && (
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-30 z-20 flex justify-center items-center p-4 min-[774px]:hidden"
              onClick={() => setIsFilterModelOpen(false)}
            >
              <div
                className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg z-30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
                  <button
                    className="text-gray-700 hover:text-[#a91f64] text-lg"
                    onClick={() => setIsFilterModelOpen(false)}
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Dynamic Category Filter for Mobile */}
                  <div>
                    <h4 className="text-base font-medium text-gray-700">
                      Category
                    </h4>
                    {uniqueCategories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center mt-2 text-base"
                      >
                        <input
                          type="checkbox"
                          className="mr-2 h-4 w-4"
                          checked={filters.category.includes(category)}
                          onChange={() =>
                            handleFilterChange("category", category)
                          }
                        />
                        {category}
                      </label>
                    ))}
                  </div>

                  {/* Availability filter */}
                  <div>
                    <h4 className="text-base font-medium text-gray-700">
                      Availability
                    </h4>
                    {["In Stock", "Out of Stock"].map((avail) => (
                      <label
                        key={avail}
                        className="flex items-center mt-2 text-base"
                      >
                        <input
                          type="checkbox"
                          className="mr-2 h-4 w-4"
                          checked={filters.availability.includes(avail)}
                          onChange={() =>
                            handleFilterChange("availability", avail)
                          }
                        />
                        {avail}
                      </label>
                    ))}
                  </div>

                  <button
                    className="mt-6 w-full bg-[#a91f64] text-white px-4 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsFilterModelOpen(false)}
                  >
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Filter + Sort controls */}
          <div className="min-[774px]:hidden sticky top-8 bg-transparent z-10 p-2">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => setIsFilterModelOpen(true)}
                className="bg-[#a91f64] text-white px-4 py-2 rounded-md text-sm font-medium flex-1"
              >
                Filter
              </button>
              <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64] flex-1"
              >
                <option value="default">Newest</option>
                <option value="weight-low">Weight: Low to High</option>
                <option value="weight-high">Weight: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 gap-6 min-[774px]:grid-cols-2 md:grid-cols-3">
            {sortedProducts.map((product) => (
              <Productcard
                key={product.id}
                id={product.id}
                image={product.image}
                text={product.text}
                weight={product.weight}
                category={product.category}
                inStock={product.inStock}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
