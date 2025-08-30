import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { MdError, MdCheckCircle } from "react-icons/md";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleReset = () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    // ✅ Simulate email being sent
    setError("");
    setSuccess(true);

    // In real app → API call to backend to send reset link
    // e.g., await fetch("/api/forgot-password", { method:"POST", body: JSON.stringify({email}) })
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-black/60 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Forgot Password?</h2>
          <p className="text-gray-400 text-base mt-2">
            Enter your email to reset your password.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center bg-red-600/90 text-white text-sm font-medium px-4 py-3 mb-6 rounded-lg">
            <MdError className="text-lg mr-2" />
            <span>{error}</span>
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="flex items-center bg-green-600/90 text-white text-sm font-medium px-4 py-3 mb-6 rounded-lg">
            <MdCheckCircle className="text-lg mr-2" />
            <span>Reset link sent to {email}.</span>
          </div>
        )}

        {/* Email Input */}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-3.5 text-gray-400">
            <FaEnvelope />
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg rounded-lg shadow-md transition duration-200 mb-4"
        >
          Send Reset Link
        </button>

        {/* Back to Login */}
        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="text-blue-400 hover:underline text-sm"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
