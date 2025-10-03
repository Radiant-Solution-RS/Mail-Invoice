import React from "react";
import logo from "../../assets/logo-footer.png"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left side */}
        <div className="md:w-1/2">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-18 md:h-20 lg:h-24 w-auto mb-2 px-8" 
          />
          <p className="text-sm leading-relaxed mb-6">
            Connect inboxes (Gmail, Outlook, IMAP), <br/> auto-detect PDF & XML
          invoices, <br/> 
          </p>
          {/* Small social icon */}
          <a
            href="#"
            className="inline-block text-gray-400 hover:text-white text-xl"
          >
            <i className="fa-brands fa-linkedin"></i> 
          </a>
        </div>

        {/* Right side - Quick Links */}
        <div className="md:w-1/4">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
