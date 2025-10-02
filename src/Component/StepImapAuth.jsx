import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const StepImapAuth = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    host: "",
    port: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("IMAP Credentials:", formData);
    
    if (onSuccess) onSuccess();
  };

  return (
    <div className="px-6 justify-center">
      <form className="space-y-4  space-x-8">
               {/* Email */}
               <div>
                 <label className="block text-sm font-medium text-gray-600 ">
                   Email
                 </label>
                 <div className="relative mt-1">
                   <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                   <input
                     type="email"
                     placeholder="example@gmail.com"
                     
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                     required
                   />
                 </div>
               </div>
     
               {/* Password */}
               <div>
                 <label className="block text-sm font-medium text-gray-600">
                   Password
                 </label>
                 <div className="relative mt-1">
                   <FaLock className="absolute left-3 top-3 text-gray-400" />
                   <input
                     type="password"
                     placeholder="••••••••"
                     
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                     required
                   />
                 </div>
                 <div className="flex justify-between items-center text-sm mt-2">
                   <label className="flex items-center">
                     <input type="checkbox" className="mr-2" /> Remember me
                   </label>
                   <a href="/reset" className="text-black hover:underline">
                     Forgot Password?
                   </a>
                 </div>
               </div>
     
               {/* Button */}
               <button
                 type="submit"
                 className="w-136 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
               >
                 Sign in
               </button>
             </form>
     
    </div>
  );
};

export default StepImapAuth;
