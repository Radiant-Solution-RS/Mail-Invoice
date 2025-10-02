import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import outloo from "../assets/outloo.png";
import { Link, useNavigate } from "react-router-dom";  // ✅ yeh import zaroori hai

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ hook initialize karo

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ ab kuch bhi daloge to direct dashboard pe chala jayega
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h2 className="font-inter font-bold text-[38px] text-center">
          Mail Invoices
        </h2>

        <p className="font-inter font-semibold text-[24px] text-center mb-6">
          Sign in
        </p>
        <p className="font-inter text-[20px] text-center mb-4">
          Enter your login details to sign in
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="/reset" className="text-black hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign in
          </button>
        </form>

        {/* Sign up */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account yet?{" "}
          <Link to="/signup" className="text-black font-medium hover:underline">
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="px-2 text-sm text-gray-400">Or continue with</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50 text-black font-semibold text-[18px] ">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50 text-black font-semibold  text-[18px] ">
            <img src={outloo} alt="Outlook" className="w-5 h-5" />
            Outlook
          </button>
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50 text-black font-semibold  text-[18px]">
            IMAP
          </button>
        </div>
      </div>
    </div>
  );
}