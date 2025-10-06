import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    t("pricing.plans.free"),
    t("pricing.plans.pro"),
    t("pricing.plans.business"),
  ];

  return (
    <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="uppercase text-gray-500 text-sm font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("pricing.tagline")}
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t("pricing.title")}
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t("pricing.subtitle")}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {["free", "pro", "business"].map((key, index) => {
            const plan = t(`pricing.plans.${key}`, { returnObjects: true });
            const highlight = key === "pro";

            return (
              <motion.div
                key={index}
                className={`relative rounded-2xl shadow-lg p-8 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  highlight
                    ? "bg-gray-50 border-2 border-indigo-500"
                    : "bg-white"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                {highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                    {t("pricing.mostPopular")}
                  </span>
                )}

                <div>
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      highlight ? "text-indigo-600" : "text-gray-800"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/monthly</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 px-4 rounded-lg mb-6 font-medium transition ${
                      highlight
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {plan.button}
                  </motion.button>

                  <ul className="space-y-3 text-gray-600 text-sm">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                      >
                        <span className="text-green-500 mr-2">✔</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
