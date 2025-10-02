import React from "react";
import dashboardImg from "../../assets/Dashboard.png"; // 👈 apni dashboard wali image ka path

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
    <section className="px-12 py-20 bg-white text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold leading-snug">
          Automating Financial <br />
          <span className="text-indigo-600">Workflows From Email</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Mail Invoices captures PDFs and XML e-invoices<br/>from Gmail, Outlook,
          or IMAP with smart OCR.
        </p>
      </div>

      {/* Dashboard Image */}
      <div className="max-w-5xl mx-auto mb-16 rounded-2xl  overflow-hidden">
        <img src={dashboardImg} alt="Dashboard Preview" className="w-full" />
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {features.map((item, index) => (
          <div key={index} className="text-center space-y-3">
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
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div>
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          View All Features
        </button>
      </div>
    </section>
  );
}
