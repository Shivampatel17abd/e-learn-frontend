import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-indigo-500">About Roadflix</h1>

        {/* Intro */}
        <p className="text-lg text-gray-300">
          <span className="text-white font-semibold">Roadflix</span> is a modern e-learning platform built for students, self-learners, and aspiring professionals. We offer a guided and structured learning experience through curated roadmaps, playlists, and practical coding challenges — all in one place.
        </p>

        {/* What We Offer */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Structured roadmaps for Web Development, DSA, Competitive Programming, and GATE</li>
            <li>Direct links to trusted YouTube playlists and tutorials</li>
            <li>Problem Practice section with categorized challenges</li>
            <li>Secure authentication system with JWT and bcrypt</li>
            <li>Responsive and animated UI with Tailwind CSS and Framer Motion</li>
          </ul>
        </div>

        {/* Why Roadflix */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Why Roadflix?</h2>
          <p className="text-gray-300">
            Tired of bouncing between websites and unsure where to begin your tech journey? Roadflix simplifies the chaos by providing curated, step-by-step guidance along with real-time access to high-quality learning resources — helping you stay focused and consistent.
          </p>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">How It Works</h2>
          <p className="text-gray-300">
            Each roadmap is broken into clear milestones with brief explanations, video tutorials, and coding resources from platforms like LeetCode and GeeksforGeeks. Users can register, log in, and get personalized access to their content.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Built With </h2>
          <p className="text-gray-300">
            Roadflix is built using <span className="font-semibold">React, Vite, Tailwind CSS</span> for the frontend and <span className="font-semibold">Express.js, MongoDB</span> for the backend. Authentication is powered by <span className="font-semibold">JWT</span> and <span className="font-semibold">bcrypt</span> for secure user sessions. The interface is animated using <span className="font-semibold">Framer Motion</span> for a smooth user experience.
          </p>
        </div>

        {/* Who It's For */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Who Is It For?</h2>
          <p className="text-gray-300">
            Whether you're a complete beginner or an intermediate learner looking to sharpen your skills, Roadflix provides everything you need — in one organized, easy-to-use platform.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to bridge the gap between scattered content and focused learning. By combining structure, curation, and practical engagement, Roadflix helps learners progress faster and smarter in their technical journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
