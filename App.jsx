import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Accounts from "./Accounts";
import ForgotPassword from "./ForgotPassword"; // ✅ import the forgot password page

const App = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/images/LOG.png')", // ✅ use your background image
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          {/* ✅ new route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
