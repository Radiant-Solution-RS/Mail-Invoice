import React from "react";
import navlogo1 from "../../assets/navlogo1.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      {/* Logo / Brand */}
      <div className="flex items-center">
        <img 
          src={navlogo1} 
          alt="Mail Invoice Logo" 
          className="h-20 w-auto object-contain"  // 👈 logo size bara kar diya
        />
      </div>

      {/* Center Nav Links */}
      <div className="hidden md:flex gap-6">
        <a href="#about" className="text-gray-700 text-lg hover:text-black transition">About</a>
        <a href="#features" className="text-gray-700 text-lg hover:text-black transition">Features</a>
        <a href="#resources" className="text-gray-700 text-lg hover:text-black transition">Resources</a>
        <a href="#contact" className="text-gray-700 text-lg hover:text-black transition">Contact</a>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-3">
        <a
          href="/login"
          className="px-4 py-2 border rounded-lg bg-black text-white hover:bg-white hover:text-black transition"
        >
          Login Now
        </a>
        <a
          href="/signup"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Sign Up Now
        </a>
      </div>
    </nav>
  );
}
