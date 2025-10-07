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
    { en: "about", de: "Über uns", href: "#about" },
    { en: "features", de: "Funktionen", href: "#features" },
    { en: "resources", de: "Ressourcen", href: "#resources" },
    { en: "contact", de: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center select-none"
          style={{ cursor: "default" }}
        >
          <motion.img
            src={navlogo1}
            alt="Mail Invoice Logo"
            className="h-16 w-auto object-contain select-none"
            style={{ cursor: "default" }}
          />
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          className="hidden md:flex items-center gap-6 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ cursor: "default" }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-black text-lg font-dm font-semibold hover:text-black transition select-none"
              style={{ cursor: "default" }}
              whileHover={{ scale: 1 }}
            >
              {i18n.language === "de" ? link.de : link.en}
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop Right Section */}
        <motion.div
          className="hidden md:flex items-center gap-3 select-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ cursor: "default" }}
        >
          <a
            href="/login"
            className="px-4 py-2 border border-black rounded-md bg-white text-sm select-none"
            style={{ cursor: "default" }}
          >
            {i18n.language === "de" ? "Einloggen" : "login Now"}
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-black text-white rounded-md border border-black text-sm select-none"
            style={{ cursor: "default" }}
          >
            {i18n.language === "de" ? "Registrieren" : "sign Up Now"}
          </a>

          {/* Language Dropdown */}
          <div className="relative ml-3 select-none" style={{ cursor: "default" }}>
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1 text-base font-semibold text-black select-none"
              style={{ cursor: "default" }}
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
                  className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md border border-gray-200 select-none"
                  style={{ cursor: "default" }}
                >
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 text-sm select-none"
                    style={{ cursor: "default" }}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("de")}
                    className="block w-full text-left px-4 py-2 text-sm select-none"
                    style={{ cursor: "default" }}
                  >
                    German
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden select-none" style={{ cursor: "default" }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ cursor: "default" }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
