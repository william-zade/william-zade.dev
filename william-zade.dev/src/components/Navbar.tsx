import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Site Name */}
          <div className="text-2xl font-bold">
            William Zade
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Projects</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Open menu"
            >
              {/* Hamburger Icon: simple 3 bars */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
