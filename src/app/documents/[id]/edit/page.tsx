"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Document {
  id: number;
  title: string;
  content: any;
  category: string;
  tags?: string[] | null;
}

export default function EditDocumentPage({
  params,
}: {
  params: { id: string };
}) {
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await fetch(`/api/documents/${params.id}`);
        if (!response.ok) {
          if (response.status === 404) {
            router.push("/documents");
            return;
          }
          throw new Error("Failed to fetch document");
        }
        const data = await response.json();
        setDocument(data);
      } catch (error) {
        console.error("Error fetching document:", error);
        router.push("/documents");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [params.id, router]);

  const handleSave = async () => {
    if (!document) return;

    setSaving(true);
    try {
      const response = await fetch(`/api/documents/${document.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: document.title,
          content: document.content,
          tags: document.tags,
        }),
      });

      if (!response.ok) throw new Error("Failed to save document");
      router.push(`/documents/${document.id}`);
    } catch (error) {
      console.error("Error saving document:", error);
      alert("Failed to save document. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleSectionChange = (index: number, content: string) => {
    if (!document) return;

    const newContent = { ...document.content };
    newContent.sections[index].content = content;

    setDocument({
      ...document,
      content: newContent,
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!document) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Edit Document</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            onClick={() => router.push(`/documents/${document.id}`)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={document.title}
            onChange={(e) =>
              setDocument({ ...document, title: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <input
            type="text"
            value={document.tags?.join(", ") || ""}
            onChange={(e) =>
              setDocument({
                ...document,
                tags: e.target.value.split(",").map((tag) => tag.trim()),
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tags separated by commas"
          />
        </div>

        {document.content.sections?.map((section: any, index: number) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <textarea
              value={section.content}
              onChange={(e) => handleSectionChange(index, e.target.value)}
              className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
