import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      {/* Logo / Brand */}
      <h1 className="text-xl font-bold text-black">MAIL INVOICE</h1>

      {/* Center Nav Links */}
      <div className="hidden md:flex gap-6">
        <a href="#about" className="text-gray-700 hover:text-black transition">About</a>
        <a href="#features" className="text-gray-700 hover:text-black transition">Features</a>
        <a href="#resources" className="text-gray-700 hover:text-black transition">Resources</a>
        <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-3">
        <a
          href="/login"
          className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Login Now
        </a>
        <a
          href="/signup"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Sign Up Now
        </a>
      </div>
    </nav>
  );
}
