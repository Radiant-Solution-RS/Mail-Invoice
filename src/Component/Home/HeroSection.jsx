import React from "react";
import Hero from "../../assets/Hero.png"

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-white">
      {/* Left Side Text */}
      <div className="max-w-lg space-y-6">
        <h2 className="text-4xl font-bold leading-snug">
          Auto–Collect, Parse <br /> & Export Invoices <br /> From Email
        </h2>
        <p className="text-gray-600">
          Smart Invoice Processing From Your Mailbox. Connect inboxes (Gmail, Outlook, IMAP),
          auto-detect PDF & XML invoices, clean vendor data, apply rules, and deliver
          ready-to-use exports to your accounting systems. Save hours on manual entry — audit-ready.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          Schedule a Demo
        </button>
      </div>

      {/* Right Side Image */}
      <div className="mt-8 md:mt-0 md:ml-12">
        <img
          src={Hero}
          alt="hero"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
