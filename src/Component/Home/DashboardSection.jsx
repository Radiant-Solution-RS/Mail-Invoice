import React from "react";
import { motion } from "framer-motion";
import dashboardImg from "../../assets/Dashboard.png";

export default function DashboardSection() {
  const features = [
    {
      title: "Multi-account Intake",
      desc: "Track your progress and motivate your efforts everyday.",
    },
    {
      title: "Smart Invoice Detection",
      desc: "Set and track goals with manageable task breakdowns.",
    },
    {
      title: "Supplier Directory & Dedupe",
      desc: "Ensure your daily safety with tighter encryption.",
    },
    {
      title: "Rules & Automation",
      desc: "Meet targets and deadlines that matter most.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 bg-white text-center overflow-hidden">
      {/* Heading */}
      <motion.div
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Automating Financial <br />
          <span className="text-indigo-600">Workflows From Email</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Mail Invoices captures PDFs and XML e-invoices <br />
          from Gmail, Outlook, or IMAP with smart OCR.
        </p>
      </motion.div>

      {/* Dashboard Image */}
      <motion.div
        className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={dashboardImg}
          alt="Dashboard Preview"
          className="w-full"
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Features */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="text-center space-y-3 p-4 rounded-lg hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          View All Features
        </motion.button>
      </motion.div>
    </section>
  );
}
