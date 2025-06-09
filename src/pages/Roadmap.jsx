import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Roadmap() {
  const [isOpen, setIsOpen] = useState(false);

  const roadmaps = [
    { title: 'DSA', path: '/roadmap/dsa', desc: 'Crack coding interviews step-by-step.' },
    { title: 'Web Development', path: '/roadmap/webdev', desc: 'Complete guide from basics to advanced.' },
    { title: 'Frontend Dev', path: '/roadmap/frontend', desc: 'Master HTML, CSS, JS & frameworks.' },
    { title: 'Backend Dev', path: '/roadmap/backend', desc: 'Learn server-side, databases, APIs & more.' },
    { title: 'GATE', path: '/roadmap/gate', desc: 'Structured plan for GATE preparation.' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Side Navbar */}
      <aside className="md:w-64 bg-gray-800 bg-opacity-80 backdrop-blur-sm p-4">
        <div className="flex justify-between items-center md:block">
          <h2 className="text-xl font-bold mb-4">Roadmap</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sm bg-indigo-600 px-2 py-1 rounded"
          >
            {isOpen ? 'Hide' : 'Menu'}
          </button>
        </div>
        <ul className={`space-y-2 mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          {roadmaps.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path} className="hover:text-white block transition duration-200">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-indigo-200/20 backdrop-blur-md border border-indigo-300/30 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:bg-indigo-300/30"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-100">{item.title}</h3>
            <p className="text-indigo-100 mb-4 text-sm">{item.desc}</p>
            <Link
              to={item.path}
              className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-600 transition"
            >
              Explore →
            </Link>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

