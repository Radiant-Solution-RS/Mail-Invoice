import React from "react";
import img1 from "../../assets/practice1.png"; 
import img2 from "../../assets/practice2.png"; 

export default function ResourcesSection() {
  const resources = [
    {
      img: img1,
      title: "Insights & Industry Updates",
      desc: "Auto-detect PDF & XML invoices, clean vendor data, apply rules, and deliver ready-to-use exports to your accounting systems.",
    },
    {
      img: img2,
      title: "Stay Aligned with Standards",
      desc: "Auto-detect PDF & XML invoices, clean vendor data, apply rules, and deliver ready-to-use exports to your accounting systems.",
    },
  ];

  return (
    <section className="px-8 py-16 bg-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Practical Tools & Knowledge</h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Guides, compliance notes (XRechnung, Factur-X, ZUGFeRD), blog
              updates, and a help center keep your team informed and ready.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              View All Resources
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition max-w-md mx-auto p-8"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
