import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login.jsx";
import Reset from "./Pages/Reset.jsx";
import SignUpPage from "./Pages/Signup.jsx";
import MailInvoiceDashboard from "./Component/MailInvoiceDashboard.jsx";
import Home from "./Pages/Home.jsx"; 
import "./Language/i18n.js"

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset" element={<Reset />} />

        
        <Route path="/dashboard" element={<MailInvoiceDashboard />} />

      
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
