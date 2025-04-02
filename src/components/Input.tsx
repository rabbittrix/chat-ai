"use client";

import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white">{label}</label>
      )}
      <div className="relative">
        <div
          className={`absolute inset-0 rounded-lg transition-all duration-300 ${
            isFocused
              ? "bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#7C3AED] animate-gradient"
              : "bg-[#2a2a5f]"
          }`}
        />
        <input
          {...props}
          className={`relative w-full px-4 py-2.5 bg-[#1a1a3f] border-2 rounded-lg text-white placeholder-[#ffffff66] focus:outline-none transition-all duration-300 ${
            isFocused ? "border-transparent" : "border-[#2a2a5f]"
          } ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
