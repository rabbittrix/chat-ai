"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Check for session expiration
    if (status === "unauthenticated" && window.location.pathname !== "/login") {
      toast.error("Your session has expired. Please sign in again.");
      router.push("/login");
    }
  }, [status, router]);

  const handleAuthClick = async () => {
    if (session) {
      await signOut({ redirect: false });
      router.push("/");
      toast.success("You have been signed out successfully.");
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="w-1/4">
            <Link href="/" className="text-white text-2xl font-bold">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="flex-1 hidden md:flex justify-center space-x-8">
            <Link
              href="/features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/doc-templates"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="w-1/4 flex items-center justify-end space-x-4">
            {session ? (
              <>
                <span className="text-gray-300">
                  {session.user?.name || session.user?.email}
                </span>
                <button
                  onClick={handleAuthClick}
                  className="bg-transparent text-white hover:text-gray-300 px-4 py-2 rounded-md transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAuthClick}
                  className="bg-transparent text-white hover:text-gray-300 px-4 py-2 rounded-md transition-colors"
                >
                  Sign In
                </button>
                <Link
                  href="/signup"
                  className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] px-4 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
