"use client";

import { useState } from "react";
import Link from "next/link";

interface Document {
  id: string;
  name: string;
  type: string;
  dateModified: string;
  size: string;
}

export default function Documents() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Business Contract.pdf",
      type: "PDF File",
      dateModified: "3/22/2024 2:07 AM",
      size: "1.2 MB",
    },
    {
      id: "2",
      name: "Resume Template.docx",
      type: "Word Document",
      dateModified: "3/22/2024 6:47 PM",
      size: "458 KB",
    },
    {
      id: "3",
      name: "Financial Report.xlsx",
      type: "Excel Spreadsheet",
      dateModified: "3/22/2024 6:43 PM",
      size: "2.1 MB",
    },
  ]);

  return (
    <main className="min-h-screen bg-[#0a0a1f]">
      {/* Top Navigation Bar */}
      <div className="bg-[#1a1a3f] border-b border-[#2a2a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">My Documents</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Document
              </button>
              <button className="flex items-center px-4 py-2 bg-[#1a1a3f] hover:bg-[#2a2a5f] text-white rounded-lg transition-colors border border-[#2a2a5f]">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#1a1a3f] border-b border-[#2a2a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-[#2a2a5f] rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-[#ffffffcc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
              <div className="h-6 w-px bg-[#2a2a5f]"></div>
              <button
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#2a2a5f] text-white"
                    : "text-[#ffffffcc] hover:bg-[#2a2a5f]"
                }`}
                onClick={() => setViewMode("list")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <button
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#2a2a5f] text-white"
                    : "text-[#ffffffcc] hover:bg-[#2a2a5f]"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zm0 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zm-10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Document List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {viewMode === "list" ? (
          <div className="bg-[#1a1a3f] rounded-lg border border-[#2a2a5f] overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-[#2a2a5f] text-sm font-medium text-white">
              <div className="col-span-5">Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-3">Date Modified</div>
              <div className="col-span-2">Size</div>
            </div>
            <div className="divide-y divide-[#2a2a5f]">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="grid grid-cols-12 gap-4 px-4 py-3 text-sm text-[#ffffffcc] hover:bg-[#2a2a5f] transition-colors cursor-pointer"
                >
                  <div className="col-span-5 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-[#7C3AED]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    {doc.name}
                  </div>
                  <div className="col-span-2">{doc.type}</div>
                  <div className="col-span-3">{doc.dateModified}</div>
                  <div className="col-span-2">{doc.size}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#1a1a3f] rounded-lg border border-[#2a2a5f] p-4 hover:border-[#7C3AED] transition-colors cursor-pointer group"
              >
                <div className="aspect-square rounded-lg bg-[#2a2a5f] mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-[#7C3AED]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-medium truncate group-hover:text-[#7C3AED]">
                  {doc.name}
                </h3>
                <p className="text-sm text-[#ffffffcc] mt-1">
                  {doc.dateModified}
                </p>
                <p className="text-sm text-[#ffffffcc]">{doc.size}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
