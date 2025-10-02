import React from "react";

export default function ClientLogos() {
  const logos = ["Acme Corp", "Quantum", "Echo Valley", "Celestial", "Pulse", "Apex"];

  return (
    <section className="flex justify-center gap-10 py-10 text-gray-400">
      {logos.map((logo, index) => (
        <span key={index} className="font-medium">
          {logo}
        </span>
      ))}
    </section>
  );
}
