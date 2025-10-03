import React from "react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/monthly",
      button: "Get started for free",
      features: [
        "1 connected mailbox (Gmail/Outlook/IMAP)",
        "Up to 250 invoices per month",
        "PDF + XML detection with OCR",
        "Basic exports (CSV, Excel)",
        "Basic support",
      ],
      size: "short",
    },
    {
      name: "Pro",
      price: "$48",
      period: "/monthly",
      button: "Sign up now",
      features: [
        "Up to 5 mailboxes",
        "5,000 invoices per month",
        "OCR + XML parsing (Factur-X, XRechnung, ZUGFeRD support)",
        "Advanced exports (CSV, Excel, JSON, PDF)",
        "Supplier directory & dedupe",
        "Rules & automation",
        "Detailed usage analytics",
        "Priority email support",
      ],
      size: "medium",
      highlight: true,
    },
    {
      name: "Business",
      price: "$199",
      period: "/monthly",
      button: "Sign up now",
      features: [
        "Unlimited mailboxes",
        "50,000 invoices per month",
        "200GB storage",
        "Advanced vendor engine (multi-condition & TIN matching)",
        "OCR + AI dedupe with bulk uploads",
        "Advanced exports, SFTP, Webhooks, Accounting integrations",
        "Full audit trail (RBAC, roles-based access)",
        "Data retention & compliance options",
        "Priority support with SLA response",
      ],
      size: "tall",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.p
          className="uppercase text-gray-500 text-sm font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Simple, Scalable, Transparent
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Plans that grow with your needs
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          From free mailbox monitoring to enterprise-grade automation with SSO
          and custom compliance, choose a plan that matches your invoice volume
          and integration level.
        </motion.p>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
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
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl shadow-lg p-8 flex flex-col text-left 
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                ${plan.highlight ? "bg-gray-50 border-2 border-indigo-500 scale-105" : "bg-white"}
                ${
                  plan.size === "short"
                    ? "h-[420px]"
                    : plan.size === "medium"
                    ? "h-[520px]"
                    : "h-[650px]"
                }
              `}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Badge for highlight */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3
                className={`text-lg font-semibold mb-4 ${
                  plan.highlight ? "text-indigo-600" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-1">{plan.period}</span>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 px-4 rounded-lg mb-6 font-medium transition
                  ${
                    plan.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-black text-white hover:bg-gray-800"
                  }
                `}
              >
                {plan.button}
              </motion.button>

              {/* Features */}
              <ul className="space-y-3 text-gray-600 text-sm overflow-y-auto">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
