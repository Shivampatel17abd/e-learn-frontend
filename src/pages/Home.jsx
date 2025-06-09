import React from 'react';
import { motion } from 'framer-motion';
import HomeImg from '../assets/Home.jpg';
import { Link, useNavigate } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const pageTransition = {
  duration: 0.6,
  ease: 'easeInOut',
};

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      // Redirect to roadmap or dashboard if already logged in
      navigate("/roadmap");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-800 px-6 py-12 gap-8"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Welcome to <span className="text-indigo-500">📚Roadflix</span>
          </h1>

          <p className="text-lg text-gray-400 mb-6">
            A smarter way to learn technology — roadmaps, playlists, practice, and hands-on knowledge.
          </p>

          {/* Show button only if not logged in */}
          {!isLoggedIn && (
            <button
              onClick={handleGetStarted}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              Get Started
            </button>
          )}
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={HomeImg}
            alt="Home"
            className="w-full max-w-md mx-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* 🚀 Roadmap and Practice Cards */}
      <section className="bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-indigo-600 transition"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">🚗 Roadmap</h3>
            <p className="text-gray-400 mb-4">
              Explore detailed learning paths for web development, frontend, backend, and more.
            </p>
            <Link
              to="/roadmap"
              className="text-indigo-500 hover:underline font-medium"
            >
              Go to Roadmap →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-indigo-600 transition"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">🧠 Practice</h3>
            <p className="text-gray-400 mb-4">
              Sharpen your skills by solving real-world coding problems curated for beginners to pros.
            </p>
            <Link
              to="/problemPractice"
              className="text-indigo-500 hover:underline font-medium"
            >
              Start Practicing →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
