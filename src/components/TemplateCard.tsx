import Link from "next/link";
import { Template } from "@/types/templates";

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="bg-[#1a1a3f] rounded-xl p-6 border border-[#ffffff1a] hover:border-[#7C3AED]/50 transition-all duration-300">
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
  );
}
