"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiEdit2, FiTrash2, FiShare2, FiEye } from "react-icons/fi";

interface Document {
  id: number;
  title: string;
  category: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export default function DocumentsPage() {
  const [userDocuments, setUserDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch("/api/documents");
        if (!response.ok) throw new Error("Failed to fetch documents");
        const data = await response.json();
        setUserDocuments(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleDelete = async (documentId: number) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      try {
        const response = await fetch(`/api/documents/${documentId}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete document");
        setUserDocuments(userDocuments.filter((doc) => doc.id !== documentId));
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    }
  };

  const handleShare = (documentId: number) => {
    // TODO: Implement share functionality
    console.log("Share document:", documentId);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold">My Documents</h1>
        </div>
        <button
          onClick={() => router.push("/doc-templates")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Create New Document
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userDocuments.map((document) => (
              <tr key={document.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {document.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {document.category}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {document.createdAt?.toLocaleDateString() || "Unknown date"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {document.updatedAt?.toLocaleDateString() || "Unknown date"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => router.push(`/documents/${document.id}`)}
                      className="text-blue-600 hover:text-blue-900"
                      title="View"
                    >
                      <FiEye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        router.push(`/documents/${document.id}/edit`)
                      }
                      className="text-green-600 hover:text-green-900"
                      title="Edit"
                    >
                      <FiEdit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleShare(document.id)}
                      className="text-purple-600 hover:text-purple-900"
                      title="Share"
                    >
                      <FiShare2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(document.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
