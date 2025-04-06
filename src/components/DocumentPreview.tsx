import React, { useState } from "react";
import { FiX, FiDownload, FiSave } from "react-icons/fi";
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import AddressField from "./AddressField";

// Initialize pdfMake with the fonts
(pdfMake as any).vfs = (pdfFonts as any).pdfMake?.vfs;

// Helper function to strip HTML tags
const stripHtml = (html: string) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

interface AddressData {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface Section {
  title: string;
  content: string;
  type: string;
  options?: {
    currency?: string;
    amount?: string;
    rate?: string;
  };
}

interface DocumentData {
  title: string;
  content: {
    sections: Section[];
  };
}

interface DocumentPreviewProps {
  document: DocumentData;
  onClose: () => void;
  isOpen: boolean;
}

const getCurrencySymbol = (currencyCode: string = "USD") => {
  const currencies: { [key: string]: string } = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CNY: "¥",
    CHF: "Fr",
    CAD: "C$",
    AUD: "A$",
    BRL: "R$",
    INR: "₹",
  };
  return currencies[currencyCode] || "$";
};

const formatContent = (
  content: string,
  type: string,
  options?: any
): string => {
  try {
    switch (type) {
      case "image":
        if (!content) return "";
        return `
          <div class="flex justify-center">
            <img 
              src="${content}" 
              alt="Uploaded image" 
              class="max-h-40 object-contain rounded-lg"
            />
          </div>
        `;
      case "table":
        if (content.includes("<table")) {
          return content
            .replace(
              /<table/g,
              '<table class="min-w-full divide-y divide-gray-200"'
            )
            .replace(
              /<th/g,
              '<th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"'
            )
            .replace(
              /<td/g,
              '<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"'
            );
        }
        return `<table class="min-w-full divide-y divide-gray-200">${content}</table>`;
      case "terms":
      case "clause":
      case "longtext":
        if (!content.startsWith("<")) {
          return `<div class="prose">${content}</div>`;
        }
        return content;
      case "signature":
        if (!content) return "";
        return `
          <div class="my-2">
            <img 
              src="${content}" 
              alt="Signature" 
              class="max-h-20 object-contain"
            />
          </div>
        `;
      case "currency":
        const currency = options?.currency || "USD";
        const amount = options?.amount || content;
        return `${currency} ${amount}`;
      case "percentage":
        const rate = options?.rate || content;
        return `${rate}%`;
      case "address":
        try {
          const addr =
            typeof content === "string"
              ? (JSON.parse(content) as AddressData)
              : (content as AddressData);
          return `
            <div class="text-gray-900">
              <p class="mb-1">${addr.street} ${addr.number}</p>
              ${addr.complement ? `<p class="mb-1">${addr.complement}</p>` : ""}
              ${
                addr.neighborhood
                  ? `<p class="mb-1">${addr.neighborhood}</p>`
                  : ""
              }
              <p class="mb-1">${addr.city}, ${addr.state} ${addr.zipCode}</p>
              <p>${addr.country}</p>
            </div>
          `;
        } catch {
          return content;
        }
      default:
        return content || "";
    }
  } catch (error) {
    console.error("Error formatting content:", error);
    return content || "";
  }
};

const DocumentPreview: React.FC<DocumentPreviewProps> = ({
  document,
  onClose,
  isOpen,
}) => {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  const getFormattedDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}_${hours}-${minutes}`;
  };

  const getNextVersion = async (baseTitle: string) => {
    try {
      const response = await fetch("/api/documents");
      if (!response.ok) throw new Error("Failed to fetch documents");

      const documents = await response.json();
      const relatedDocs = documents.filter((doc: any) =>
        doc.title.startsWith(baseTitle + "_v")
      );

      if (relatedDocs.length === 0) return 1;

      const versions = relatedDocs.map((doc: any) => {
        const match = doc.title.match(/_v(\d+)_/);
        return match ? parseInt(match[1]) : 0;
      });

      return Math.max(...versions) + 1;
    } catch (error) {
      console.error("Error getting next version:", error);
      return 1;
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      // Format sections to ensure proper structure
      const formattedSections = document.content.sections.map((section) => ({
        title: section.title,
        content: section.content,
        type: section.type,
        options: section.options || {},
      }));

      const documentData = {
        title: document.title,
        content: {
          sections: formattedSections,
        },
        type: "Bond Agreement",
        status: "draft",
      };

      const response = await fetch("/api/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(documentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save document");
      }

      toast.success("Document saved successfully");
      router.push("/my-documents");
      onClose();
    } catch (error) {
      console.error("Error saving document:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to save document. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const generatePDF = () => {
    const docDefinition: { content: any[]; styles: any } = {
      content: [
        { text: document.title, style: "header" },
        ...document.content.sections
          .map((section) => {
            let content;
            if (section.type === "signature" && section.content) {
              content = {
                image: section.content,
                width: 200,
                alignment: "left",
              };
            } else if (section.type === "image" && section.content) {
              content = {
                image: section.content,
                width: 300,
                alignment: "center",
              };
            } else if (section.type === "address") {
              try {
                const addr = JSON.parse(section.content) as AddressData;
                content = {
                  stack: [
                    {
                      text: `${addr.street} ${addr.number}`,
                      margin: [0, 0, 0, 5],
                    },
                    ...(addr.complement
                      ? [{ text: addr.complement, margin: [0, 0, 0, 5] }]
                      : []),
                    ...(addr.neighborhood
                      ? [{ text: addr.neighborhood, margin: [0, 0, 0, 5] }]
                      : []),
                    {
                      text: `${addr.city}, ${addr.state} ${addr.zipCode}`,
                      margin: [0, 0, 0, 5],
                    },
                    { text: addr.country },
                  ],
                };
              } catch {
                content = { text: section.content };
              }
            } else {
              content = {
                text: formatContent(
                  stripHtml(section.content),
                  section.type,
                  section.options
                ),
              };
            }
            return [{ text: section.title, style: "sectionHeader" }, content];
          })
          .flat(),
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        sectionHeader: {
          fontSize: 18,
          bold: true,
          margin: [0, 15, 0, 10],
        },
      },
    };

    pdfMake.createPdf(docDefinition).download(`${document.title}.pdf`);
  };

  const generateDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: document.title,
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            ...document.content.sections
              .map((section) => {
                let content;
                if (section.type === "signature" && section.content) {
                  const base64Data = section.content.split(",")[1];
                  content = [
                    new Paragraph({
                      children: [
                        new ImageRun({
                          data: Buffer.from(base64Data, "base64"),
                          transformation: {
                            width: 200,
                            height: 100,
                          },
                          type: "png",
                        }),
                      ],
                    }),
                  ];
                } else if (section.type === "image" && section.content) {
                  const base64Data = section.content.split(",")[1];
                  content = [
                    new Paragraph({
                      children: [
                        new ImageRun({
                          data: Buffer.from(base64Data, "base64"),
                          transformation: {
                            width: 400,
                            height: 300,
                          },
                          type: "png",
                        }),
                      ],
                      alignment: "center",
                    }),
                  ];
                } else if (section.type === "address") {
                  try {
                    const addr = JSON.parse(section.content) as AddressData;
                    content = [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${addr.street} ${addr.number}`,
                          }),
                        ],
                        spacing: { after: 200 },
                      }),
                      ...(addr.complement
                        ? [
                            new Paragraph({
                              children: [
                                new TextRun({ text: addr.complement }),
                              ],
                              spacing: { after: 200 },
                            }),
                          ]
                        : []),
                      ...(addr.neighborhood
                        ? [
                            new Paragraph({
                              children: [
                                new TextRun({ text: addr.neighborhood }),
                              ],
                              spacing: { after: 200 },
                            }),
                          ]
                        : []),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${addr.city}, ${addr.state} ${addr.zipCode}`,
                          }),
                        ],
                        spacing: { after: 200 },
                      }),
                      new Paragraph({
                        children: [new TextRun({ text: addr.country })],
                      }),
                    ];
                  } catch {
                    content = [
                      new Paragraph({
                        children: [new TextRun({ text: section.content })],
                      }),
                    ];
                  }
                } else {
                  content = [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: formatContent(
                            stripHtml(section.content),
                            section.type,
                            section.options
                          ),
                        }),
                      ],
                    }),
                  ];
                }

                return [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: section.title,
                        bold: true,
                        size: 28,
                      }),
                    ],
                  }),
                  ...content,
                ];
              })
              .flat(),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${document.title}.docx`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Document Preview</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 text-[#7C3AED] hover:bg-[#7C3AED]/10 rounded-lg transition-colors"
            >
              <FiSave size={18} />
              {saving ? "Saving..." : "Save to My Documents"}
            </button>
            <button
              onClick={generatePDF}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <FiDownload size={18} />
              Download PDF
            </button>
            <button
              onClick={generateDOCX}
              className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <FiDownload size={18} />
              Download DOCX
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto text-gray-900">
            <h1 className="text-3xl font-bold mb-8">{document.title}</h1>
            {document.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div
                  className="prose max-w-none text-gray-900"
                  dangerouslySetInnerHTML={{
                    __html: formatContent(
                      section.content,
                      section.type,
                      section.options
                    ),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPreview;
