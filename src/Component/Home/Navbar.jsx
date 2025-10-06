import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import navlogo1 from "../../assets/navlogo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { i18n } = useTranslation();

  const currentLang = i18n.language === "de" ? "German" : "English";

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangDropdown(false);
  };

  const navLinks = [
    { en: "About", de: "Über uns", href: "#about" },
    { en: "Features", de: "Funktionen", href: "#features" },
    { en: "Resources", de: "Ressourcen", href: "#resources" },
    { en: "Contact", de: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        
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
          className="hidden md:flex items-center gap-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-black text-lg font-dm font-semibold hover:text-black transition"
              whileHover={{ scale: 1.05 }}
            >
              {i18n.language === "de" ? link.de : link.en}
            </motion.a>
          ))}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1 text-lg font-semibold text-black hover:text-gray-700 transition"
            >
              {currentLang} <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {showLangDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md border border-gray-200"
                >
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("de")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    German
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
            className="px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white transition text-sm"
          >
            {i18n.language === "de" ? "Einloggen" : "Login Now"}
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-black text-white rounded-md border border-black hover:bg-white hover:text-black transition text-sm"
          >
            {i18n.language === "de" ? "Registrieren" : "Sign Up Now"}
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
                className="text-gray-700 text-base hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                {i18n.language === "de" ? link.de : link.en}
              </a>
            ))}

            {/* Mobile Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1 text-gray-700 text-base hover:text-black transition"
              >
                {currentLang} <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {showLangDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-32 bg-white shadow-md rounded-md border border-gray-200"
                  >
                    <button
                      onClick={() => {
                        changeLanguage("en");
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage("de");
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      German
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="/login"
                className="px-4 py-2 border border-black rounded-md bg-black text-white hover:bg-white hover:text-black transition"
              >
                {i18n.language === "de" ? "Einloggen" : "Login Now"}
              </a>
              <a
                href="/signup"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black border border-black transition"
              >
                {i18n.language === "de" ? "Registrieren" : "Sign Up Now"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
