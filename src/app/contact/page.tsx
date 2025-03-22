"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type FormData = {
  fullName: string;
  email: string;
  company: string;
  role: string;
  employeeCount: string;
  budget: string;
  message: string;
};

export default function ContactEnterprise() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    role: "",
    employeeCount: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aqui você implementaria a lógica de envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    // Adicionar lógica de feedback de sucesso
  };

  return (
    <main className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            Enterprise Sales Contact
          </h1>
          <p className="text-[#ffffffcc] text-lg max-w-2xl mx-auto">
            Get in touch with our enterprise team to create a custom solution
            for your organization
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a3f]/50 backdrop-blur-sm rounded-xl p-8 border border-[#ffffff1a]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="w-full px-4 py-2 bg-[#0a0a2f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-[#0a0a2f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-2 bg-[#0a0a2f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                  placeholder="Company Inc."
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Your Role
                </label>
                <select
                  id="role"
                  required
                  className="w-full px-4 py-2 bg-[#0a0a2f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                >
                  <option value="">Select role</option>
                  <option value="ceo">CEO/Founder</option>
                  <option value="cto">CTO</option>
                  <option value="hr">HR Director</option>
                  <option value="manager">Department Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Employee Count */}
              <div>
                <label
                  htmlFor="employeeCount"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Number of Employees
                </label>
                <select
                  id="employeeCount"
                  required
                  className="w-full px-4 py-2 bg-[#0a0a2f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                  value={formData.employeeCount}
                  onChange={(e) =>
                    setFormData({ ...formData, employeeCount: e.target.value })
                  }
                >
                  <option value="">Select range</option>
                  <option value="50-100">50-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Expected Monthly Budget
                </label>
                <select
                  id="budget"
                  required
                  className="w-full px-4 py-2 bg-[#0a0a2f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                >
                  <option value="">Select budget</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5001-10000">$5,001 - $10,000</option>
                  <option value="10001-25000">$10,001 - $25,000</option>
                  <option value="25000+">$25,000+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Tell us about your needs
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-[#0a0a2f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                placeholder="Describe your requirements and use case..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Contact Sales Team</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-[#ffffffcc]">
            Need immediate assistance?{" "}
            <a
              href="mailto:enterprise@company.com"
              className="text-[#7C3AED] hover:text-[#6D28D9]"
            >
              enterprise@company.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
