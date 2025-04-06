"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Document {
  id: number;
  title: string;
  content: any;
  category: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export default function DocumentPage({ params }: { params: { id: string } }) {
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
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
        <div>
          <h1 className="text-3xl font-bold">{document.title}</h1>
          <p className="text-gray-500 mt-2">
            Created on{" "}
            {document.createdAt?.toLocaleDateString() || "Unknown date"}
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push(`/documents/${document.id}/edit`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Edit Document
          </button>
          <button
            onClick={() => router.push("/documents")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to Documents
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="prose max-w-none">
          {document.content.sections?.map((section: any, index: number) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
