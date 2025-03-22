import Link from "next/link";

export default function Features() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#1a1a3f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Evolving AI Technology
          </h1>
          <p className="text-[#ffffffcc] text-xl max-w-3xl mx-auto">
            Our AI system continuously learns and adapts, becoming more
            intelligent with every interaction
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-8 border border-[#ffffff1a] hover:border-purple-500/50 transition-all duration-300">
            <div className="h-12 w-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-[#ffffffcc]">
              Our AI analyzes thousands of successful documents daily, learning
              from each interaction to improve its suggestions and outputs.
            </p>
          </div>

          <div className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-8 border border-[#ffffff1a] hover:border-purple-500/50 transition-all duration-300">
            <div className="h-12 w-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Adaptive Templates
            </h3>
            <p className="text-[#ffffffcc]">
              Templates evolve based on industry trends and user feedback,
              ensuring your documents always follow current best practices.
            </p>
          </div>

          <div className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-8 border border-[#ffffff1a] hover:border-purple-500/50 transition-all duration-300">
            <div className="h-12 w-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Smart Data Analysis
            </h3>
            <p className="text-[#ffffffcc]">
              Our system learns from anonymized data patterns to provide more
              accurate and relevant document suggestions.
            </p>
          </div>
        </div>

        {/* Learning Process Section */}
        <div className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-12 border border-[#ffffff1a] mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">
            How Our AI Learns and Evolves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-500">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Data Collection
                  </h3>
                  <p className="text-[#ffffffcc]">
                    Analyzes successful documents and user interactions while
                    maintaining strict privacy standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-500">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Pattern Recognition
                  </h3>
                  <p className="text-[#ffffffcc]">
                    Identifies successful patterns and trends in document
                    creation and formatting.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-500">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Model Updates
                  </h3>
                  <p className="text-[#ffffffcc]">
                    Regular model updates incorporate new learnings and improve
                    document generation quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-500">
                  4
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Feedback Loop
                  </h3>
                  <p className="text-[#ffffffcc]">
                    User feedback and success metrics are continuously
                    incorporated to improve results.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-500">
                  5
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Industry Adaptation
                  </h3>
                  <p className="text-[#ffffffcc]">
                    Stays current with industry standards and regulatory
                    requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-500">
                  6
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Performance Optimization
                  </h3>
                  <p className="text-[#ffffffcc]">
                    Continuous optimization for faster and more accurate
                    document generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Future of Document Creation
          </h2>
          <p className="text-[#ffffffcc] mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our evolving AI
            technology to create professional documents.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </main>
  );
}
