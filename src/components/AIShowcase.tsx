"use client";

import { useState, useEffect } from "react";

const showcaseItems = [
  {
    title: "AI Resume Builder",
    description:
      "Transform your experience into a professional resume in seconds",
    animation: (
      <div className="bg-[#1a1a3f] rounded-lg p-6 shadow-2xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-purple-700/20 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-purple-700/20 rounded w-5/6"></div>
            <div className="h-4 bg-purple-700/20 rounded w-4/6"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-purple-700/20 rounded w-5/6"></div>
            <div className="h-4 bg-purple-700/20 rounded w-4/6"></div>
          </div>
          <div className="h-8 bg-purple-700/40 rounded w-1/4"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Bond Contracts",
    description: "Generate legally-sound bond contracts with AI assistance",
    animation: (
      <div className="bg-[#1a1a3f] rounded-lg p-6 shadow-2xl">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="h-6 bg-purple-700/20 rounded w-1/3"></div>
            <div className="h-6 bg-purple-700/40 rounded-full w-6"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-purple-700/20 rounded w-full"></div>
            <div className="h-4 bg-purple-700/20 rounded w-5/6"></div>
            <div className="h-4 bg-purple-700/20 rounded w-4/6"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-8 bg-purple-700/30 rounded w-1/4"></div>
            <div className="h-8 bg-purple-700/20 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Financial Agreement Generator",
    description:
      "Create custom financial contracts with intelligent terms and conditions",
    animation: (
      <div className="bg-[#1a1a3f] rounded-lg p-6 shadow-2xl">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-purple-700/20 rounded"></div>
            <div className="h-20 bg-purple-700/30 rounded"></div>
          </div>
          <div className="h-4 bg-purple-700/20 rounded w-3/4"></div>
          <div className="flex space-x-2">
            <div className="h-8 bg-purple-700/40 rounded w-1/3"></div>
            <div className="h-8 bg-purple-700/20 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function AIShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center opacity-0 animate-fadeIn">
        <div className="space-y-6">
          <div className="transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-bold text-white">
              {showcaseItems[current].title}
            </h2>
            <p className="text-[#ffffffcc] text-lg mt-4">
              {showcaseItems[current].description}
            </p>
          </div>
          <div className="flex space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  current === index ? "bg-purple-600" : "bg-purple-600/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-video transition-all duration-500 ease-in-out">
          {showcaseItems[current].animation}
        </div>
      </div>
    </div>
  );
}
