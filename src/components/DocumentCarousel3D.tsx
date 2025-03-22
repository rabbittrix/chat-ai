"use client";

import { useState, useEffect } from "react";

const documents = [
  {
    type: "Resume",
    sections: [
      "John Anderson",
      "Senior Software Engineer",
      "Professional Summary:",
      "10+ years of experience in full-stack development",
      "Technical Skills:",
      "• React, Node.js, TypeScript",
      "• Cloud Architecture (AWS, Azure)",
      "• CI/CD and DevOps practices",
    ],
  },
  {
    type: "Bond Contract",
    sections: [
      "CORPORATE BOND AGREEMENT",
      "Issue Date: [Current Date]",
      "Principal Amount: $10,000,000",
      "Interest Rate: 5.75% per annum",
      "Maturity: 5 years",
      "Payment Schedule:",
      "• Semi-annual interest payments",
      "• Principal due at maturity",
    ],
  },
  {
    type: "Financial Contract",
    sections: [
      "INVESTMENT AGREEMENT",
      "Between: [Party A]",
      "And: [Party B]",
      "Investment Terms:",
      "Amount: $500,000",
      "Equity: 10%",
      "Distribution: Quarterly",
      "Term: 36 months",
    ],
  },
];

function TypewriterDocument({
  sections,
  isActive,
  onComplete,
}: {
  sections: string[];
  isActive: boolean;
  onComplete: () => void;
}) {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (!isActive) {
      setVisibleSections([]);
      setCurrentIndex(0);
      setCurrentText("");
      return;
    }

    if (currentIndex >= sections.length) {
      onComplete();
      return;
    }

    const targetText = sections[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= targetText.length) {
        setCurrentText(targetText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setVisibleSections((prev) => [...prev, targetText]);
        setCurrentText("");
        setCurrentIndex((prev) => prev + 1);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentIndex, isActive, sections, onComplete]);

  return (
    <div className="relative w-[280px] h-[400px]">
      <div className="absolute inset-0 bg-[#0a0a2f]/40 rounded-lg backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 to-transparent rounded-lg"></div>
      <div className="relative p-6 space-y-4 font-mono text-sm">
        {visibleSections.map((section, idx) => (
          <div key={idx} className="text-[#7C3AED]/70">
            {section}
          </div>
        ))}
        {currentText && (
          <div className="text-[#7C3AED]/70">
            {currentText}
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DocumentCarousel3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % documents.length);
        setIsTypingComplete(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isTypingComplete]);

  return (
    <div className="relative h-[500px] w-full my-20">
      <div className="absolute inset-0 flex items-center justify-center">
        {documents.map((doc, index) => {
          const offset = (index - currentIndex) % documents.length;
          const isActive = offset === 0;
          const isBefore = offset < 0;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${
                isActive
                  ? "z-20 scale-100 opacity-100 translate-y-0"
                  : isBefore
                  ? "-translate-x-[140%] -rotate-12 scale-95 opacity-30 z-10 translate-y-12"
                  : "translate-x-[140%] rotate-12 scale-95 opacity-30 z-10 translate-y-12"
              }`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1500px",
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-lg shadow-lg"></div>
                <TypewriterDocument
                  sections={doc.sections}
                  isActive={isActive}
                  onComplete={handleTypingComplete}
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#ffffff80] text-sm font-medium whitespace-nowrap">
                  {doc.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
