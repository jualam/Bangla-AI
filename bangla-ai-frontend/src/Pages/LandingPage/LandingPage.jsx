import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../Components/ui/Button";
import Navbar from "../../Components/common/Navbar";

const LandingPage = () => {
  // State to manage FAQ dropdowns
  const [openIndex, setOpenIndex] = useState(null);

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
            বাংলা এ আই, বাংলায় এ আই, আমাদের এ আই
          </p>
        </div>

        {/* Right Section - Input Box */}
        <div className="md:w-1/2 w-full bg-white shadow-xl rounded-xl p-8 flex flex-col items-center space-y-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Translate your Texts with Bangla-AI
          </h2>

          {/* Divider */}
          <hr className="w-full border-t border-gray-200" />

          {/* Enlarged Textarea */}
          <textarea
            className="w-full h-48 p-4 focus:outline-none focus:ring-2 focus:ring-green-500 border rounded-lg text-gray-700 placeholder-gray-400 resize-none"
            placeholder="Paste your text here..."
          ></textarea>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 w-full justify-between">
            {/* Upload Button with Icon */}
            <label className="cursor-pointer flex items-center space-x-2 w-full md:w-auto text-gray-700 font-medium hover:text-gray-900 transition-colors">
              <input type="file" className="hidden" />
              <UploadCloud size={18} /> {/* Upload Icon */}
              <span>Upload</span>
            </label>

            {/* Translate Button */}
            <Link to="/get-started">
              <button className="w-full md:w-auto px-6 py-3 text-base font-medium bg-black hover:bg-gray-800 transition rounded-lg text-white hover:shadow-lg">
                Translate →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16 px-6 md:px-16 lg:px-32 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Step 1</h3>
            <p className="mt-4 text-gray-600">
              Paste your text or upload a document.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Step 2</h3>
            <p className="mt-4 text-gray-600">
              Let Bangla-AI process and translate your content.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Step 3</h3>
            <p className="mt-4 text-gray-600">
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
      <div className="bg-gradient-to-br from-green-500 to-blue-500 py-16 px-6 md:px-16 lg:px-32 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
          Stay Updated with Bangla-AI
        </h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter for the latest updates and features.
        </p>
        <div className="max-w-md mx-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg focus:outline-none text-gray-900"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition">
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
          className="text-2xl md:text-3xl font-extrabold text-green-500"
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

        {/* Bengali Version */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold text-green-500 mt-10"
        >
          আমাদের সম্পর্কে
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          বাংলা এআই হল একটি উন্নত এআই-চালিত প্ল্যাটফর্ম যা নিউ ইয়র্ক সিটির
          বাংলা জাতিগত মিডিয়া সাংবাদিকদের সহায়তা করার জন্য তৈরি হয়েছে। আমাদের
          লক্ষ্য হলো অত্যাধুনিক সরঞ্জাম সরবরাহ করা যা অনুবাদের নির্ভুলতা বৃদ্ধি
          করে এবং কন্টেন্ট তৈরি করার প্রক্রিয়াকে সহজতর করে, যাতে সাংবাদিকরা
          বাংলা ভাষাভাষী সম্প্রদায়ের জন্য সময়মতো এবং উচ্চ-মানের সংবাদ প্রদান
          করতে পারেন।
        </motion.p>
      </div>
    </div>
  );
};

export default LandingPage;
