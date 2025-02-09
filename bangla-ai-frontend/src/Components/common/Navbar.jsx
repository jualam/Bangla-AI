import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold text-gray-900 flex items-center space-x-2"
      >
        <img src={logo} alt="Bangla AI Logo" className="h-10 w-auto" />
        <span className="hidden md:block">Bangla AI</span>
      </Link>

      <div className="flex space-x-4">
        <Link
          to="/our-team"
          className="text-gray-700 font-bold hover:text-gray-900"
        >
          OUR TEAM
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
        >
          Login
        </Link>
        <Link
          to="/get-started"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
