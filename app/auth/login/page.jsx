"use client";
import { useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Login successful!");
        setTimeout(() => (window.location.href = "/"), 800);
      } else {
        setMessage(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4 relative">

      {/* Full-screen loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
          <div className="h-10 w-10 border-4 border-[#a91f64] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#a91f64] mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Login to continue your shopping experience
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 focus:border-[#a91f64] focus:ring-[#a91f64] outline-none p-2.5 rounded-md text-sm"
            />
          </div>

          {/* Password with eye toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 focus:border-[#a91f64] focus:ring-[#a91f64] outline-none p-2.5 rounded-md text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {!loading && (
            <button
              type="submit"
              className="w-full bg-[#a91f64] hover:bg-[#8d1954] text-white font-medium py-2.5 rounded-md transition duration-300"
            >
              Login
            </button>
          )}

          {message && !loading && (
            <p
              className={`text-center text-sm mt-3 ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {!loading && (
          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/auth/signup" className="text-[#a91f64] hover:underline">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
