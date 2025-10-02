import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 bg-black text-white p-12 flex flex-col justify-between rounded-none ">
        <div>
          <div className="mb-12">
            <Mail className="w-12 h-12" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Discover a world of <br />
            possibilities tailored just <br />
            for you.
          </h1>

          <div className="space-y-4">
            {[
              "Gain access to powerful tools and resources designed to enhance your experience.",
              "Be the first to know about new features, updates, and special events.",
              "Connect with other users and share insights, tips, and experiences.",
              "We prioritize your security and privacy, with industry-leading protections. Your information is safe with us!",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-400 mt-4">
          Have questions? Visit our{" "}
          <span className="text-white font-medium cursor-pointer hover:underline">
            Help Center
          </span>{" "}
          or reach out to our{" "}
          <span className="text-white font-medium cursor-pointer hover:underline">
            Support Team
          </span>
        </div>
      </div>

      {/* Right Panel */}
    
<div className="w-full lg:w-1/2 bg-white h-screen flex items-center justify-center p-12 rounded-none lg:rounded-r-2xl">
  <div className="w-full max-w-md">
    {/* Header */}
    <div className="text-center ">
      <h2 className="font-bold text-3xl lg:text-4xl mt-8">Mail Invoices</h2>
      <p className="font-semibold text-lg mt-2">Sign up</p>
      <p className="text-base text-gray-600 mt-1">
        Enter your details to sign up
      </p>
    </div>

    {/* Form Inputs */}
    <div className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2 text-sm">
        <input type="checkbox" id="terms" className="w-4 h-4" />
        <label htmlFor="terms">
          I agree with{" "}
          <span className="font-medium cursor-pointer hover:underline">
            Terms
          </span>{" "}
          and{" "}
          <span className="font-medium cursor-pointer hover:underline">
            Privacy policy
          </span>
          .
        </label>
      </div>

      {/* Submit */}
      <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
        Sign up
      </button>
    </div>

    {/* Or sign up with */}
    <div className="mt-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or sign up with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Google
        </button>
        <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Microsoft
        </button>
        <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          IMAP
        </button>
      </div>

      {/* Already have account */}
      <div className="text-center text-sm mt-8">
        <span className="text-gray-600">Already have an account? </span>
        <a href="/login" className="font-medium hover:underline">
          Sign in
        </a>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
