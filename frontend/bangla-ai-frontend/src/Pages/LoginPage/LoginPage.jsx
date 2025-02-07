import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-800">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </h2>

        {/* Login/Sign Up Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-left text-lg font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <input
                id="remember-me"
                type="checkbox"
                className="text-green-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-600">Remember me</label>
            </div>
            <div>
              <Link to="/forgot-password" className="text-sm text-green-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="flex justify-center space-x-4 mt-6">
          <span className="text-gray-600">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-500 font-semibold hover:underline"
          >
            {isLogin ? "Create one" : "Login here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
