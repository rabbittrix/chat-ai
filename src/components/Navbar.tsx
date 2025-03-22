import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a1f]/95 backdrop-blur-[8px] border-b border-[#ffffff0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="AI Documents"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center justify-center flex-1 space-x-8">
            <Link
              href="/features"
              className="text-[#ffffffcc] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="/templates"
              className="text-[#ffffffcc] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-[#ffffffcc] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#ffffffcc] hover:text-white text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-[#ffffff0f]"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
