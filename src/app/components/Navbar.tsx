"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/features"
              className="text-white hover:text-[#7C3AED] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/doc-templates"
              className="text-white hover:text-[#7C3AED] transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-[#7C3AED] transition-colors"
            >
              Pricing
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/signup"
                  className="px-4 py-2 text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md transition-colors"
                >
                  Sign Up
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-white hover:text-[#7C3AED] transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
