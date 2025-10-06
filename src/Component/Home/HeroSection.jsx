import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Hero from "../../assets/Hero.png";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-16 bg-white overflow-hidden min-h-[70vh] md:min-h-[80vh]">
      {/* Left Side Text */}
      <motion.div
        className="w-full md:w-1/2 max-w-xl space-y-4 md:space-y-6 text-center md:text-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-dm leading-snug">
          {t('hero.title')}
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-inter leading-relaxed max-w-lg mx-auto md:mx-0">
          {t('hero.subtitle')}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-3 bg-black hover:text-black hover:bg-white hover:border text-white rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg"
        >
          {t('hero.button')}
        </motion.button>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        <motion.img
          src={Hero}
          alt="hero"
          className="rounded-lg shadow-lg w-64 sm:w-72 md:w-[400px] h-auto object-contain"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
}
