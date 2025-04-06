interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-[#1a1a3f] border border-[#ffffff1a] rounded-lg text-white placeholder-[#ffffff80] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="w-5 h-5 text-[#ffffff80]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
