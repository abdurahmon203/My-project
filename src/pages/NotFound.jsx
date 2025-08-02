import React from "react";

function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black px-6 text-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="400"
            cy="300"
            r="250"
            stroke="rgba(99,102,241,0.5)"
            strokeWidth="3"
          />
          <circle
            cx="400"
            cy="300"
            r="200"
            stroke="rgba(99,102,241,0.3)"
            strokeWidth="2"
          />
          <circle
            cx="400"
            cy="300"
            r="150"
            stroke="rgba(99,102,241,0.2)"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="300"
            r="100"
            stroke="rgba(99,102,241,0.1)"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="300"
            r="50"
            stroke="rgba(99,102,241,0.05)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <h1 className="text-[10rem] font-extrabold select-none drop-shadow-[0_0_15px_rgb(99,102,241)] animate-pulse">
        404
      </h1>

      <p className="text-4xl font-semibold mb-4 drop-shadow-md">
        Page Not Found
      </p>
      <p className="max-w-md mb-8 text-indigo-300">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <div className="flex gap-4 justify-center">
        <a
          href="/"
          className="inline-block px-8 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Go Home
        </a>
        <button
          onClick={() => window.history.back()}
          className="inline-block px-8 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 text-white"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;