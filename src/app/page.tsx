import Link from "next/link";
import DocumentCarousel3D from "@/components/DocumentCarousel3D";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#0a0a1f] to-[#1a1a3f]">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Create Resumes and Contracts with AI
        </h1>
        <p className="text-[#ffffffcc] mb-8 text-lg">
          Use our AI to generate professional customized documents
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200"
        >
          Get Started for Free
        </Link>

        {/* 3D Document Carousel */}
        <DocumentCarousel3D />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-[#1a1a3f]/50 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3">
              Smart Templates
            </h3>
            <p className="text-[#ffffffcc]">
              Pre-built professional templates that adapt to your needs
            </p>
          </div>
          <div className="p-6 bg-[#1a1a3f]/50 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3">
              Legal Compliance
            </h3>
            <p className="text-[#ffffffcc]">
              All documents are verified for legal compliance
            </p>
          </div>
          <div className="p-6 bg-[#1a1a3f]/50 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3">
              24/7 AI Support
            </h3>
            <p className="text-[#ffffffcc]">
              Get instant help with document creation anytime
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
