"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTemplateById } from "@/doc-templates";
import { Template } from "@/types/templates";

export default function TemplateDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [template, setTemplate] = useState<Template | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typedContent, setTypedContent] = useState("");

  useEffect(() => {
    const loadedTemplate = getTemplateById(params.id);
    if (!loadedTemplate) {
      router.push("/doc-templates");
      return;
    }
    setTemplate(loadedTemplate);
  }, [params.id, router]);

  useEffect(() => {
    if (
      !template?.content?.sections ||
      !isTyping ||
      currentSection >= template.content.sections.length
    )
      return;

    const section = template.content.sections[currentSection];
    if (!section) return;

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
    if (!template?.content?.sections) return;

    if (currentSection < template.content.sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      setIsTyping(true);
      setTypedContent("");
    }
  };

  const handleUseTemplate = () => {
    if (!template) return;

    // Store the template content in localStorage before redirecting
    const templateData = {
      title: template.title,
      content: {
        sections: template.content.sections.map((section) => ({
          title: section.title,
          content: section.content,
        })),
      },
    };
    localStorage.setItem("templateData", JSON.stringify(templateData));

    // Redirect to edit page
    router.push(`/doc-templates/${template.id}/edit`);
  };

  if (!template) {
    return (
      <div className="min-h-screen bg-[#0a0a1f] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const currentSectionData = template.content?.sections?.[currentSection];
  const getDefaultLabel = (
    formFields: any[],
    type: string,
    componentLabel: string
  ) => {
    const existingFields = formFields.filter((f: any) => f.type === type);
    const count = existingFields.length + 1;
    return `${componentLabel} ${count}`;
  };

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
              {currentSectionData?.title || "No title available"}
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
              disabled={
                !template.content?.sections ||
                currentSection >= template.content.sections.length - 1
              }
              className="text-[#7C3AED] hover:text-[#6D28D9] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Section →
            </button>
            <button
              onClick={handleUseTemplate}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
            >
              Use This Template
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => router.push("/doc-templates")}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Templates
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
