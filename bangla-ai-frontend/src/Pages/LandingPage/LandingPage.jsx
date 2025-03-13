import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../Components/ui/Button";
import Navbar from "../../Components/common/Navbar";
import { SiGoogledocs } from "react-icons/si";
import { RiRobot3Fill } from "react-icons/ri";

const LandingPage = () => {
  // State to manage FAQ dropdowns
  const [openIndex, setOpenIndex] = useState(null);
  const [text, setText] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Bangla-AI?",
      answer:
        "Bangla-AI is an advanced AI-powered platform designed to help Bengali journalists and content creators translate news and other text quickly and accurately. It uses state-of-the-art technology to ensure high-quality translations.",
    },
    {
      question: "How do I use Bangla-AI?",
      answer:
        "Simply paste your text into the input box, upload a document, or type directly. Click the 'Translate' button, and Bangla-AI will process and provide the translated text instantly.",
    },
    {
      question: "When should I use Bangla-AI?",
      answer:
        "Use Bangla-AI whenever you need fast and accurate translations for news articles, reports, or any Bengali text. It's especially useful for journalists and media professionals who work with tight deadlines.",
    },
    {
      question: "Why Bangla-AI over Google Translate?",
      answer:
        "Bangla-AI is specifically designed for Bengali text and offers higher accuracy for news and media content. It also provides a more user-friendly experience tailored to journalists and content creators.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-16 max-w-6xl mx-auto w-full">
        {/* Left Section - Text */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Welcome to <span className="text-green-500">Bangla-AI</span>
          </h1>
          <p className="mt-4 text-lg font-bold text-gray-600 max-w-lg mx-auto md:mx-0">
            বাংলা এ আই, আমাদের এ আই
          </p>
        </div>

        {/* Right Section - Translation Options */}
        <div className="md:w-1/2 w-full mb-4 bg-white shadow-2xl rounded-xl p-8 flex flex-col items-center space-y-8 border border-gray-300">
          <h2 className="text-xl font-semibold text-gray-900">
            Choose a Translation Mode
          </h2>

          {/* English to Bangla Translation */}
          <Link to="/translate-en-bn">
            <button className="w-full px-6 py-3 text-base font-medium bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-600 hover:to-green-600 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg text-white shadow-lg hover:shadow-xl">
              Translate from English to Bangla →
            </button>
          </Link>

          {/* Bangla to English Translation */}
          <Link to="/translate-bn-en">
            <button className="w-full px-6 py-3 mb-4 text-base font-medium bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-600 hover:to-green-600 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg text-white shadow-lg hover:shadow-xl">
              Translate from Bangla to English →
            </button>
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-br from-green-500 to-black py-20 px-6 md:px-16 lg:px-32 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          🚀 How <span className="text-red">It Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg 
        transform hover:scale-105 hover:border-3 hover:border-green-400 
        hover:backdrop-filter-none transition-all duration-500 ease-in-out"
          >
            <div className="text-4xl text-white flex justify-center items-center mb-4 animate-bounce">
              <SiGoogledocs />
            </div>

            <h3 className="text-xl font-semibold text-white">Step 1</h3>
            <p className="mt-4 text-gray-200">
              Paste your text or upload a document.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg 
            transform hover:scale-105 hover:border-3 hover:border-green-400 
            hover:backdrop-filter-none transition-all duration-500 ease-in-out"
          >
            <div className="text-4xl text-white flex justify-center items-center mb-4 animate-bounce">
              🤖
            </div>
            <h3 className="text-xl font-semibold text-white">Step 2</h3>
            <p className="mt-4 text-gray-200">
              Let Bangla-AI process and translate your content.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg 
            transform hover:scale-105 hover:border-3 hover:border-green-400 
            hover:backdrop-filter-none transition-all duration-500 ease-in-out"
          >
            <div className="text-4xl text-yellow-400 mb-4 animate-bounce">
              ✅
            </div>
            <h3 className="text-xl font-semibold text-white">Step 3</h3>
            <p className="mt-4 text-gray-200">
              Download or copy the translated text instantly.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16 lg:px-32 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-700" />
                ) : (
                  <ChevronDown size={20} className="text-gray-700" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-left">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-green-500 to-black py-16 px-6 md:px-16 lg:px-32 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with <span className="text-green-400">Bangla-AI</span>
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Subscribe to our newsletter for the latest updates and features.
        </p>
        <div className="max-w-lg mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:flex-1 p-3 rounded-lg bg-white/90 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-500 transition"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-red-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Animated About Section */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-white py-24 px-6 md:px-16 lg:px-32 text-center text-gray-800 overflow-hidden">
        {/* Floating Blurred Elements */}
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-green-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>

        {/* Main About Content */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-extrabold text-black"
        >
          About Bangla-AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          Bangla AI is an advanced AI-powered platform built to support Bengali
          ethnic media journalists in New York City. Our mission is to provide
          state-of-the-art tools that improve translation accuracy and
          streamline content creation, enabling journalists to deliver timely,
          high-quality news to the Bengali-speaking community.
        </motion.p>
      </div>
    </div>
  );
};

export default LandingPage;
