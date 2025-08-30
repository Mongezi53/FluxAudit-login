import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");

  const HandleLandingPage = () => {
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }
    if (isSignup) {
      if (!formData.name || !formData.surname || !formData.role) {
        setError("Please fill in all fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (!formData.agree) {
        setError("You must agree to the terms and conditions.");
        return;
      }
    }
    setError("");
    navigate("/Accounts");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-black/60 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-xl border border-gray-700">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            {isSignup ? "Create Your Account" : "Login To Your Account"}
          </h2>
          <p className="text-gray-400 text-base mt-2">
            {isSignup
              ? "Fill in the details to sign up"
              : "Enter your credentials to login"}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center bg-red-600/90 text-white text-sm font-medium px-4 py-3 mb-6 rounded-lg">
            <MdError className="text-lg mr-2" />
            <span>{error}</span>
          </div>
        )}

        {/* Signup fields */}
        {isSignup && (
          <>
            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                  className="w-full pl-10 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Roles Dropdown */}
            <div className="mb-4">
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Manager">Manager</option>
                <option value="CFO">CFO</option>
              </select>
            </div>
          </>
        )}

        {/* Email */}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-3.5 text-gray-400">
            <FaEnvelope />
          </span>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full pl-10 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-3.5 text-gray-400">
            <FaLock />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full pl-10 pr-12 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-200"
          >
            {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
          </button>
        </div>

        {/* Confirm Password */}
        {isSignup && (
          <div className="mb-4 relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full pl-10 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Terms (Signup Only) */}
        {isSignup && (
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={formData.agree}
              onChange={(e) =>
                setFormData({ ...formData, agree: e.target.checked })
              }
              className="mr-2"
            />
            <label className="text-sm text-gray-300">
              I agree to the{" "}
              <a href="/terms" className="text-blue-400 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
        )}

        {/* Forgot Password (Login Only) */}
        {!isSignup && (
          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-blue-400 text-sm hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={HandleLandingPage}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg rounded-lg shadow-md transition duration-200"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* Toggle */}
        <div className="text-center mt-6">
          {isSignup ? (
            <>
              <span className="text-sm text-gray-300">
                Already have an account?{" "}
              </span>
              <button
                onClick={() => setIsSignup(false)}
                className="text-blue-400 hover:underline text-sm"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-300">New here? </span>
              <button
                onClick={() => setIsSignup(true)}
                className="text-blue-400 hover:underline text-sm"
              >
                Create an Account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
