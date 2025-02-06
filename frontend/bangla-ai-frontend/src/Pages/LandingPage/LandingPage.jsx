import React from "react";
import { motion } from "framer-motion";
import Button from "../../Components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold tracking-tight sm:text-6xl"
      >
        Welcome to <span className="text-green-500">Bangla AI</span>
      </motion.h1>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        The future of AI in Bangladesh. Experience cutting-edge AI solutions
        tailored for you.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6"
      >
        <Link to="/login">
          <Button className="px-6 py-3 text-lg font-medium bg-green-600 hover:bg-green-700 transition rounded-lg flex items-center gap-2">
            Get Started <ArrowRight size={18} />
          </Button>
        </Link>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default LandingPage;
