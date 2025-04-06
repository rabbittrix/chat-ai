"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { getTemplateById } from "@/doc-templates";
import { Template } from "@/types/templates";

export default function TemplatePreview({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [template, setTemplate] = useState<Template | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typedContent, setTypedContent] = useState("");
  const resolvedParams = use(params);

  useEffect(() => {
    const loadedTemplate = getTemplateById(resolvedParams.id);
    if (!loadedTemplate) {
      router.push("/doc-templates");
      return;
    }
    setTemplate(loadedTemplate);
  }, [resolvedParams.id, router]);

  useEffect(() => {
    if (
      !template ||
      !isTyping ||
      currentSection >= template.content.sections.length
    )
      return;

    const section = template.content.sections[currentSection];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= section.content.length) {
        setTypedContent(section.content.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [template, currentSection, isTyping]);

  const handleNextSection = () => {
    if (!template) return;

    if (currentSection < template.content.sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      setIsTyping(true);
    }
  };

  const handleUseTemplate = () => {
    // TODO: Implement template usage logic
    console.log("Using template:", template?.id);
  };

  if (!template) {
    return (
      <div className="min-h-screen bg-[#0a0a1f] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            {template.title}
          </h1>
          <p className="text-[#ffffffcc] mb-6">{template.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-[#7C3AED]/20 text-[#7C3AED] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a3f] rounded-xl p-8 border border-[#ffffff1a] mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white mb-2">
              {template.content.sections[currentSection].title}
            </h2>
            <div className="h-px bg-[#ffffff1a] w-full"></div>
          </div>

          <div className="font-mono text-[#ffffffcc] whitespace-pre-wrap min-h-[200px]">
            {typedContent}
            <span className="animate-pulse">|</span>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handleNextSection}
              disabled={currentSection >= template.content.sections.length - 1}
              className="text-[#7C3AED] hover:text-[#6D28D9] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Section →
            </button>
            <button
              onClick={handleUseTemplate}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Use This Template
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push("/doc-templates")}
            className="text-[#ffffffcc] hover:text-white"
          >
            ← Back to Templates
          </button>
        </div>
      </div>
    </main>
  );
}
