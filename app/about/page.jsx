// app/about/page.jsx
"use client";

import {
  FaGem,
  FaCrown,
  FaHandsHelping,
  FaShieldAlt,
  FaTools,
  FaSmile,
} from "react-icons/fa";

export default function AboutPage() {
  const values = [
    {
      icon: <FaGem className="text-[#a91f64] w-6 h-6 mx-auto mb-2" />,
      text: "Authentic Gold (21K / 22K)",
    },
    {
      icon: <FaCrown className="text-[#a91f64] w-6 h-6 mx-auto mb-2" />,
      text: "Fully Custom Designs",
    },
    {
      icon: <FaHandsHelping className="text-[#a91f64] w-6 h-6 mx-auto mb-2" />,
      text: "Handcrafted with Precision",
    },
    {
      icon: <FaShieldAlt className="text-[#a91f64] w-6 h-6 mx-auto mb-2" />,
      text: "Secure Buy & Sell",
    },
    {
      icon: <FaTools className="text-[#a91f64] w-6 h-6 mx-auto mb-2" />,
      text: "Professional Repair Service",
    },
    {
      icon: <FaSmile className="text-[#a91f64] w-6 h-6 mx-auto mb-2" />,
      text: "Customer-first Experience",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#a91f64]">
            About Our Store
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Crafting gold jewelry with precision, emotion and legacy.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-white p-8 shadow-xl rounded-2xl border-[1px] border-[#e8b1c9]/50 hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-semibold text-[#a91f64] mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              GoldCraft began with a passion for creating timeless jewelry that
              tells a story. Every piece we design is handcrafted using premium
              21K and 22K gold, tailored to your preferences.
              <br />
              <br />
              We specialize in made-to-order jewelry, ensuring exclusivity and
              personalized touch. Whether traditional or modern, we blend craft
              with elegance in every product.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/jewelry-workshop.jpg"
              alt="Crafting jewelry"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Our Mission",
              text: "To deliver customized gold jewelry that reflects your personality and celebrations with trust and excellence.",
            },
            {
              title: "Our Vision",
              text: "To become a leader in personalized gold artistry, empowering modern customers with traditional values.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl shadow-lg border-[1px] border-[#e8b1c9]/50 bg-gradient-to-br from-pink-50 to-white hover:scale-[1.02] hover:shadow-xl hover:from-white hover:to-pink-100 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#a91f64] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#a91f64] text-center mb-6">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border-[1px] border-[#e8b1c9]/40 bg-gradient-to-br from-white to-pink-50 shadow-md text-center hover:text-[#a91f64] hover:shadow-xl hover:from-pink-100 hover:to-white hover:scale-[1.03] transition-all duration-300 text-gray-600 font-medium"
              >
                {item.icon}
                <span className="block mt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid md:grid-cols-3 gap-10 items-center bg-pink-50 p-10 rounded-2xl shadow-inner mb-16">
          <img
            src="/images/founder.jpg"
            alt="Founder"
            className="rounded-2xl w-48 h-48 object-cover mx-auto shadow-lg"
          />
          <div className="md:col-span-2 text-gray-700 leading-relaxed">
            <h3 className="text-xl font-semibold text-[#a91f64] mb-2">
              Meet the Founder
            </h3>
            <p>
              Osama founded GoldCraft with a strong vision of preserving
              cultural elegance while adapting to modern preferences. His
              dedication to design quality and customer satisfaction drives
              everything we do.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-[#a91f64] hover:bg-[#8d1954] text-white px-8 py-3 rounded-xl text-lg font-medium transition-all shadow-md"
          >
            Got an idea? Let's design it.
          </a>
        </div>
      </div>
    </div>
  );
}
