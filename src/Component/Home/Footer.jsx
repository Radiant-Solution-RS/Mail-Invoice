import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left side */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-3">MAIL INVOICE</h3>
          <p className="text-sm leading-relaxed mb-6">
            Connect inboxes (Gmail, Outlook, IMAP), auto-detect PDF & XML
            invoices, clean vendor data, apply rules, and deliver ready-to-use
            exports to your accounting systems.
          </p>
          {/* Small social icon */}
          <a
            href="#"
            className="inline-block text-gray-400 hover:text-white text-lg"
          >
            ⬜
          </a>
        </div>

        {/* Right side - 4 columns */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Examples</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
