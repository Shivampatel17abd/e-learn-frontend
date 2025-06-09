import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Introduction to GATE",
    details: [
      "Know about GATE",
      "Opportunities after the GATE exam",
      "Get the syllabus of GATE"
    ],
    color: "from-green-400 to-green-600"
  },
  {
    id: "02",
    title: "What is approach to complete subject",
    details: [
      "Complete the subject completely according to syllabus",
      "Solve the DPP or solve practice sets",
      "Revise in each two months"
    ],
    color: "from-teal-400 to-teal-600"
  },
  {
    id: "03",
    title: "Time to complete the syllabus of GATE",
    details: [
      "Try to cover the syllabus till September"
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "04",
    title: "What do after the completion of the syllabus",
    details: [
      "Solve more and more problems",
      "Revise each subject at least 3-4 times",
      "Take a test series and start attempting the tests",
      "Make the short notes of every subject",
      "Solve the PYQs"
    ],
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: "05",
    title: "Ways to do the subject revise",
    details: [
      "Take the PYQ and start solving",
      "Revise theory if you are making mistake on PYQs"
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "06",
    title: "How to make short notes",
    details: [
      "Don't make short notes on first revision",
      "First do two or three revision then make the short notes"
    ],
    color: "from-pink-400 to-pink-600"
  },
  {
    id: "07",
    title: "How to attempt the tests",
    details: [
      "Before attempting the test first revise all subject from short notes",
      "After attempting the test mark down the mistakes",
      "Make a chart in which you note down your test marks"
    ],
    color: "from-yellow-400 to-yellow-600"
  }
];


export default function Roadmap() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Gate Preparation Roadmap
      </h1>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col gap-14">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-12`}
              >
                {/* Diamond */}
                <div
                  className={`w-20 h-20 bg-gradient-to-b ${step.color} text-white flex items-center justify-center font-bold text-xl transform rotate-45 z-10`}
                >
                  <span className="transform -rotate-45">{step.id}</span>
                </div>

                {/* Content Card */}
                <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-2/3">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h2>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
                    {step.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
