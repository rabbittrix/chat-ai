"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Template, TemplateCategory } from "@/types/templates";
import { getAllTemplates, getTemplatesByCategory } from "@/doc-templates";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<TemplateCategory>("resume");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const categories: { id: TemplateCategory; label: string }[] = [
    { id: "resume", label: "Resumes" },
    { id: "legal", label: "Legal" },
    { id: "financial", label: "Financial" },
    { id: "business", label: "Business" },
  ];

  const templates = getTemplatesByCategory(selectedCategory);
  const filteredTemplates = templates.filter((template) =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0a0a1f] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Back to Dashboard
            </button>
            <h1 className="text-3xl font-bold text-white">
              Document Templates
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#1a1a3f] text-white hover:bg-[#7C3AED]/20"
                }`}
              >
                {category.label}
              </button>
            ))}
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 bg-[#1a1a3f] text-white rounded-lg border border-[#ffffff1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
            />
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-[#1a1a3f] rounded-xl p-6 border border-[#ffffff1a] hover:border-[#7C3AED] transition-all duration-200 cursor-pointer"
              onClick={() => router.push(`/doc-templates/${template.id}`)}
            >
              <h2 className="text-xl font-semibold text-white mb-3">
                {template.title}
              </h2>
              <p className="text-[#ffffffcc] mb-4 line-clamp-2">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {template.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#7C3AED]/20 text-[#7C3AED] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#ffffffcc] text-lg">
              No templates found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
