interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const categories = [
  { id: "all", label: "All Templates" },
  { id: "resume", label: "Resumes" },
  { id: "legal", label: "Legal Documents" },
  { id: "financial", label: "Financial" },
  { id: "business", label: "Business" },
];

const commonTags = [
  "Professional",
  "Modern",
  "Creative",
  "Simple",
  "Formal",
  "Technical",
];

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagsChange,
}: CategoryFilterProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
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

      <div className="flex flex-wrap gap-2">
        {commonTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
              selectedTags.includes(tag)
                ? "bg-[#7C3AED] text-white"
                : "bg-[#1a1a3f] text-[#ffffffcc] hover:bg-[#7C3AED]/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
