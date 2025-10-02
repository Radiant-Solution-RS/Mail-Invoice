import React from "react";
import Hero from "../../assets/Hero.png"

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-white">
      {/* Left Side Text */}
      <div className="max-w-lg space-y-6">
        <h2 className="text-5xl font-bold font-dm leading-snug">
          Auto–Collect, Parse <br /> & Export Invoices <br /> From Email
        </h2>
        <p className="text-2xl text-gray-600 font-inter">
          Smart Invoice Processing From Your Mailbox. Connect inboxes (Gmail, Outlook, IMAP),
          auto-detect PDF & XML invoices, clean vendor data, apply rules, and deliver
          ready-to-use exports to your accounting systems. Save hours on manual entry — audit-ready.
        </p>
        <button className="px-6 py-3 bg-black hover:text-black  hover:bg-white hover:border text-white rounded-lg">
          Schedule a Demo
        </button>
      </div>

      {/* Right Side Image */}
      <div className="mt-8 md:mt-3 md:ml-10">
        <img
          src={Hero}
          alt="hero"
          className="rounded-lg shadow-lg w-80 md:w-[400px] h-auto"
        />
      </div>
    </section>
  );
}
