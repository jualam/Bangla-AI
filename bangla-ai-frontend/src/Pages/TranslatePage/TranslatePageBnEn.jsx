import React, { useState, useEffect } from "react";
import { ClipboardCopy, Loader } from "lucide-react";
import { useLocation } from "react-router-dom";

const TranslatePageBnEn = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const inputText = location.state?.inputText || "";

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (inputText) {
      setText(inputText);
    }
  }, [inputText]);

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setIsLoading(true); // Start loading
    setTranslatedText(""); // Clear previous translation

    try {
      const response = await fetch(`${apiUrl}/api/translate-bn-en`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Translation failed");
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let translatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Append the translated chunk to the state
        const chunk = decoder.decode(value);
        translatedText += chunk;
        setTranslatedText(translatedText); // Update the state immediately
      }
    } catch (error) {
      console.error("Error translating text:", error);
      setTranslatedText("Translation failed. Try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    alert("Copied to clipboard!");
  };

  return (
    <div className="max-w-6xl mx-auto mb-8 p-8 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
        Translate Your Texts with Bangla-AI
      </h2>
  
      {/* Layout for Translation Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* First Translation Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Bangla</h3>
          <textarea
            className="w-full h-80 p-4 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400 resize-none"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
  
        {/* Translate Button (VISIBLE ONLY ON MOBILE - BETWEEN BOXES) */}
        <div className="flex justify-center md:hidden">
          <button
            className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition flex items-center"
            onClick={handleTranslate}
          >
            <span>Translate →</span>
            {isLoading && <Loader className="w-5 h-5 ml-2 animate-spin" />}
          </button>
        </div>
  
        {/* Second Translation Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 relative">
          <h3 className="text-lg font-medium text-gray-800 mb-3">English</h3>
          <textarea
            className="w-full h-80 p-4 border rounded-lg bg-gray-100 text-gray-700 resize-none"
            placeholder="Translation will appear here..."
            value={translatedText}
            readOnly
          />
          <button
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-green-600"
            onClick={handleCopy}
          >
            <ClipboardCopy className="w-5 h-5" />
          </button>
        </div>
      </div>
  
      {/* Translate Button (VISIBLE ONLY ON DESKTOP - BELOW BOXES) */}
      <div className="hidden md:flex justify-center mt-6">
        <button
          className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition flex items-center"
          onClick={handleTranslate}
        >
          <span>Translate →</span>
          {isLoading && <Loader className="w-5 h-5 ml-2 animate-spin" />}
        </button>
      </div>
    </div>
  );
};

export default TranslatePageBnEn;

