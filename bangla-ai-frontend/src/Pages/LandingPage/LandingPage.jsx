import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/ui/Button";
import Navbar from "../../Components/common/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left px-6 py-16 max-w-6xl mx-auto">
        {/* Left Section - Text */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to <span className="text-green-500">Bangla AI</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-xl mx-auto">
            বাংলা এআই : সংবাদ অনুবাদে প্রযুক্তির নতুন যুগ
          </p>
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <Link to="/login">
              <Button className="px-6 py-3 text-lg font-medium bg-green-600 hover:bg-green-700 transition rounded-lg mx-auto md:w-auto">
                Get Started
              </Button>
            </Link>
            {/* <Link to="/demo">
              <Button className="px-6 py-3 text-lg font-medium bg-gray-700 hover:bg-gray-800 transition rounded-lg w-full md:w-auto">
                Request Demo
              </Button>
            </Link> */}
          </div>
        </div>

        {/* Right Section - Box */}
        <div className="md:w-1/2 w-full bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center space-y-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Translate your Texts with Bangla AI
          </h2>

          {/* Adding a line under the heading */}
          <hr className="w-full border-t-2 border-gray-300 my-4" />

          {/* Textarea without visible border */}
          <textarea
            className="w-full h-32 md:h-62 p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
            placeholder="Paste your text here..."
          ></textarea>

          {/* Flex container for Upload and Translate buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full justify-center md:justify-start">
            <label className="cursor-pointer inline-flex items-center space-x-2 justify-start w-full md:w-1/2">
              <input type="file" className="hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.25 11.7885L7.25 3.3885L4.78475 5.85375L3.73075 4.76925L8 0.5L12.2693 4.76925L11.2153 5.85375L8.75 3.3885L8.75 11.7885L7.25 11.7885ZM0.5 15.5L0.5 10.9808H2L2 14L14 14V10.9808H15.5V15.5L0.5 15.5Z"
                  fill="#3B3A3B"
                />
              </svg>
              <span className="text-gray-700 font-medium">Upload</span>
            </label>

            <button className="w-full px-6 py-3 text-lg font-medium bg-black hover:bg-gray-800 transition rounded-lg text-white mt-4 md:mt-0">
              Translate →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
