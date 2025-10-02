import React from "react";

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
      size: "short", // chhota card
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
      size: "medium", // beech wala card
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
      size: "tall", // sabse bara card
    },
  ];

  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <p className="uppercase text-gray-500 text-sm font-medium mb-2">
          Simple, Scalable, Transparent
        </p>
        <h2 className="text-4xl font-bold mb-4">
          Plans that grow with your needs
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From free mailbox monitoring to enterprise-grade automation with SSO
          and custom compliance, choose a plan that matches your invoice volume
          and integration level.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-8 flex flex-col text-left transition hover:shadow-xl 
                ${plan.highlight ? "bg-gray-50 border-2 border-gray-200 scale-105" : "bg-white"}
                ${
                  plan.size === "short"
                    ? "h-[420px]"
                    : plan.size === "medium"
                    ? "h-[520px]"
                    : "h-[650px]"
                }
              `}
            >
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
              <button className="w-full bg-black text-white py-2 px-4 rounded-lg mb-6 hover:bg-gray-800 transition">
                {plan.button}
              </button>

              {/* Features */}
              <ul className="space-y-3 text-gray-600 text-sm overflow-y-auto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
