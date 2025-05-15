// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <>
      {/* Main navigation bar */}
      <Navbar />

      {/* Main content area centered and padded */}
      <main className="max-w-6xl mx-auto p-4">

        {/* Hero section component */}
        <Hero />

        {/* Tailwind CSS test message */}
        <div className="text-3xl font-bold text-red-600 p-8">
          Tailwind is working!
        </div>

        {/* Placeholder for future sections */}
        {/* Add more components or content here as you build out the app */}

      </main>
    </>
  );
}

