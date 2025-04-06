"use client";

import { useState } from "react";
import {
  templates,
  getTemplatesByCategory,
  getTemplatesByTags,
} from "@/doc-templates";
import { Template, TemplateCategory } from "@/types/templates";
import Link from "next/link";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<TemplateCategory>("resume");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { id: TemplateCategory; label: string }[] = [
    { id: "resume", label: "Resumes" },
    { id: "legal", label: "Legal Documents" },
    { id: "financial", label: "Financial" },
    { id: "business", label: "Business" },
  ];

  const filteredTemplates = searchQuery
    ? getTemplatesByTags([searchQuery])
    : getTemplatesByCategory(selectedCategory);

  return (
    <main className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Template
          </h1>
          <p className="text-xl text-[#ffffffcc]">
            Select from our professionally designed templates
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-[#7C3AED] text-white"
                      : "bg-[#1a1a3f] text-[#ffffffcc] hover:bg-[#7C3AED]/20"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 bg-[#1a1a3f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
            />
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template: Template) => (
            <div
              key={template.id}
              className="bg-[#1a1a3f] rounded-xl p-6 border border-[#ffffff1a] hover:border-[#7C3AED]/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {template.title}
              </h3>
              <p className="text-[#ffffffcc] mb-4 h-12 line-clamp-2">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#7C3AED]/20 text-[#7C3AED] px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href={`/doc-templates/${template.id}`}
                  className="text-[#7C3AED] hover:text-[#6D28D9] font-medium"
                >
                  Preview
                </Link>
                <button
                  onClick={() => {
                    /* TODO: Implement use template */
                  }}
                  className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Use Template
                </button>
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
