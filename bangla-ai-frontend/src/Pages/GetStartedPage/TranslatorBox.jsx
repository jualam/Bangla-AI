import React, { useState } from "react";
import {
  UploadCloud,
  ClipboardCopy,
  Download,
  ChevronDown,
} from "lucide-react";

const TranslatorBox = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const handleTranslate = () => {
    setTranslatedText(text ? "আপনার অনুবাদিত পাঠ্য এখানে প্রদর্শিত হবে!" : "");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    alert("Copied to clipboard!");
  };

  const handleDownload = (type) => {
    alert(`Downloading as ${type.toUpperCase()}...`);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-xl">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
        Translate Your Texts with Bangla-AI
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* English Input Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-3">English</h3>
          <textarea
            className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400 resize-none"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Bengali Output Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 relative">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Bengali</h3>
          <textarea
            className="w-full h-40 p-4 border rounded-lg bg-gray-100 text-gray-700 resize-none"
            placeholder="Translation will appear here..."
            value={translatedText}
            readOnly
          />
          {/* Copy Button */}
          <button
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-green-600"
            onClick={handleCopy}
          >
            <ClipboardCopy className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-3 md:space-y-0">
        {/* Upload Button */}
        <label className="cursor-pointer flex items-center space-x-2 text-gray-700 font-medium hover:text-gray-900 transition">
          <input type="file" className="hidden" />
          <UploadCloud size={20} />
          <span>Upload</span>
        </label>

        {/* Translate Button */}
        <button
          className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
          onClick={handleTranslate}
        >
          Translate →
        </button>

        {/* Download Dropdown */}
        <div className="relative">
          <button
            className="px-6 py-3 flex items-center space-x-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
            onClick={() => setShowDownloadMenu(!showDownloadMenu)}
          >
            <Download size={20} />
            <span>Download</span>
            <ChevronDown size={18} />
          </button>

          {/* Dropdown Menu */}
          {showDownloadMenu && (
            <div className="absolute top-12 left-0 w-45 bg-white shadow-lg rounded-lg py-2">
              <button
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => handleDownload("pdf")}
              >
                Download as PDF
              </button>
              <button
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => handleDownload("word")}
              >
                Download as Word
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranslatorBox;
