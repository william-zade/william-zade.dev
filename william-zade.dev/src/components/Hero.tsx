// src/components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Hi! I'm William Zade, a passionate developer specializing in React and Tailwind CSS.
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get in Touch
      </button>
    </section>
  );
}
