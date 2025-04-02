"use client";

import { useState } from "react";
import Link from "next/link";

const features = {
  free: [
    "5 AI-generated documents",
    "Basic templates",
    "Standard export formats",
    "Email support",
  ],
  basic: [
    "50 AI-generated documents/month",
    "All basic templates",
    "PDF & Word export",
    "Custom branding",
    "Priority email support",
    "Basic analytics",
  ],
  professional: [
    "200 AI-generated documents/month",
    "All professional templates",
    "All export formats",
    "Advanced customization",
    "Priority support 24/7",
    "Team collaboration",
    "Advanced analytics",
    "API access",
  ],
  business: [
    "Unlimited AI-generated documents",
    "Custom templates",
    "Enterprise-grade security",
    "Dedicated account manager",
    "Custom API integration",
    "Multi-team management",
    "Advanced compliance tools",
    "Custom AI training",
    "Audit logs",
  ],
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const prices = {
    basic: {
      monthly: 15,
      annual: 12, // 20% de desconto
    },
    professional: {
      monthly: 59,
      annual: 47, // 20% de desconto
    },
    business: {
      monthly: 150,
      annual: 120, // 20% de desconto
    },
  };

  return (
    <main className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-[#ffffffcc] mb-8">
            Start with a 7-day free trial. No credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-sm ${
                !isAnnual ? "text-white" : "text-[#ffffffcc]"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#7C3AED]"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isAnnual ? "text-white" : "text-[#ffffffcc]"
              }`}
            >
              Annual
              <span className="ml-1 text-[#7C3AED]">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Free Trial */}
          <div className="bg-[#1a1a3f] rounded-xl p-8 border border-[#ffffff1a] hover:border-[#7C3AED]/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">
              Free Trial
            </h3>
            <p className="text-[#ffffffcc] mb-6">Perfect to get started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-[#ffffffcc]"> / 7 days</span>
            </div>
            <div className="mb-8 text-[#ffffffcc]">
              5 AI-generated documents
            </div>
            <ul className="space-y-4 mb-8">
              {features.free.map((feature, index) => (
                <li key={index} className="flex items-center text-[#ffffffcc]">
                  <svg
                    className="w-5 h-5 mr-3 text-[#7C3AED]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className="block w-full text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 rounded-lg transition-colors duration-200"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Basic */}
          <div className="bg-[#1a1a3f] rounded-xl p-8 border border-[#ffffff1a] hover:border-[#7C3AED]/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
            <p className="text-[#ffffffcc] mb-6">For individuals</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                ${isAnnual ? prices.basic.annual : prices.basic.monthly}
              </span>
              <span className="text-[#ffffffcc]"> / month</span>
              {isAnnual && (
                <div className="text-sm text-[#7C3AED] mt-2">
                  Billed annually (${prices.basic.annual * 12}/year)
                </div>
              )}
            </div>
            <div className="mb-8 text-[#ffffffcc]">
              50 AI-generated documents/month
            </div>
            <ul className="space-y-4 mb-8">
              {features.basic.map((feature, index) => (
                <li key={index} className="flex items-center text-[#ffffffcc]">
                  <svg
                    className="w-5 h-5 mr-3 text-[#7C3AED]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className="block w-full text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 rounded-lg transition-colors duration-200"
            >
              Choose Basic
            </Link>
          </div>

          {/* Professional */}
          <div className="bg-[#1a1a3f] rounded-xl p-8 border border-[#7C3AED] hover:border-[#7C3AED] transition-all duration-300 relative">
            <div className="absolute -top-3 right-8">
              <span className="bg-[#7C3AED] text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Professional
            </h3>
            <p className="text-[#ffffffcc] mb-6">For growing teams</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                $
                {isAnnual
                  ? prices.professional.annual
                  : prices.professional.monthly}
              </span>
              <span className="text-[#ffffffcc]"> / month</span>
              {isAnnual && (
                <div className="text-sm text-[#7C3AED] mt-2">
                  Billed annually (${prices.professional.annual * 12}/year)
                </div>
              )}
            </div>
            <div className="mb-8 text-[#ffffffcc]">
              200 AI-generated documents/month
            </div>
            <ul className="space-y-4 mb-8">
              {features.professional.map((feature, index) => (
                <li key={index} className="flex items-center text-[#ffffffcc]">
                  <svg
                    className="w-5 h-5 mr-3 text-[#7C3AED]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className="block w-full text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 rounded-lg transition-colors duration-200"
            >
              Choose Professional
            </Link>
          </div>

          {/* Business */}
          <div className="bg-[#1a1a3f] rounded-xl p-8 border border-[#ffffff1a] hover:border-[#7C3AED]/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
            <p className="text-[#ffffffcc] mb-6">For enterprises</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                ${isAnnual ? prices.business.annual : prices.business.monthly}
              </span>
              <span className="text-[#ffffffcc]"> / month</span>
              {isAnnual && (
                <div className="text-sm text-[#7C3AED] mt-2">
                  Billed annually (${prices.business.annual * 12}/year)
                </div>
              )}
            </div>
            <div className="mb-8 text-[#ffffffcc]">
              Unlimited AI-generated documents
            </div>
            <ul className="space-y-4 mb-8">
              {features.business.map((feature, index) => (
                <li key={index} className="flex items-center text-[#ffffffcc]">
                  <svg
                    className="w-5 h-5 mr-3 text-[#7C3AED]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className="block w-full text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 rounded-lg transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a custom solution?
          </h2>
          <p className="text-[#ffffffcc] mb-8">
            Let&apos;s create a tailored plan that works for your enterprise
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-[#7C3AED] text-white px-8 py-3 rounded-lg hover:bg-[#7C3AED] transition-colors duration-200"
          >
            Contact Enterprise Sales
          </Link>
        </div>
      </div>
    </main>
  );
}
