import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // 👈 hamburger icons
import navlogo1 from "../../assets/navlogo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white ">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <motion.div
  initial={{ x: -60, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="flex items-center"
>
  <motion.img
    src={navlogo1}
    alt="Mail Invoice Logo"
    className="h-16 w-auto object-contain cursor-pointer"
    whileHover={{ scale: 1.1, rotate: 2, filter: "brightness(1.2)" }}
    transition={{ type: "spring", stiffness: 200 }}
  />
</motion.div>


        {/* Desktop Links */}
        <motion.div
          className="hidden md:flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-gray-700 text-lg hover:text-black transition"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop Buttons */}
        <motion.div
          className="hidden md:flex gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
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
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 text-lg hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-4">
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
