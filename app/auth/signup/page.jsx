"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Signup successful! Please login");
        router.push("/auth/login");
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Social handlers – use your actual logic/provider calls
  const handleGoogleSignup = () => {
    console.log("Google Signup logic here");
  };

  const handleFacebookSignup = () => {
    console.log("Facebook Signup logic here");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#a91f64] mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Sign up to start your shopping journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 focus:border-[#a91f64] focus:ring-[#a91f64] outline-none p-2.5 rounded-md text-sm"
            />
          </div>

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

          {/* Password with toggle */}
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#a91f64] hover:bg-[#8d1954] text-white font-medium py-2.5 rounded-md transition duration-300"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Social Signup */}
        <div className="mt-5">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleGoogleSignup}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FcGoogle size={22} />
            </button>

            <button
              onClick={handleFacebookSignup}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookF size={20} className="text-blue-600" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#a91f64] hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
