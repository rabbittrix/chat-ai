import React, { useState } from "react";
import { FiLoader, FiZap, FiTrash2 } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { Editor } from "@tinymce/tinymce-react";
import { IAllProps } from "@tinymce/tinymce-react";

interface Field {
  id: string;
  type: string;
  label: string;
  value: any;
}

interface FormFieldProps {
  field: Field;
  onChange: (id: string, value: any) => void;
  onRemove: (id: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, onChange, onRemove }) => {
  const [editorRef, setEditorRef] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleEditorInit = (evt: any, editor: any) => {
    setEditorRef(editor);
    if (field.value) {
      editor.setContent(field.value);
    }
  };

  const handleEditorChange = (content: string) => {
    onChange(field.id, content);
  };

  const generateAIContent = async () => {
    try {
      setIsGenerating(true);
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fieldType: field.type,
          fieldLabel: field.label,
          documentType: "Bond Agreement",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const data = await response.json();
      let content = data.content;

      switch (field.type) {
        case "longtext":
        case "terms":
        case "clause":
          if (editorRef) {
            if (!content.startsWith("<p>")) {
              content = `<p>${content}</p>`;
            }
            editorRef.setContent(content);
            onChange(field.id, content);
          }
          break;
        case "table":
          if (!content.includes("<table")) {
            content = `<table class="min-w-full divide-y divide-gray-200">${content}</table>`;
          } else {
            content = content.replace(
              /<table/g,
              '<table class="min-w-full divide-y divide-gray-200"'
            );
          }
          content = content.replace(
            /<th/g,
            '<th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"'
          );
          content = content.replace(
            /<td/g,
            '<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"'
          );
          onChange(field.id, content);
          break;
        case "email":
          onChange(field.id, content);
          break;
        case "signature":
          onChange(field.id, content);
          break;
        case "image":
          const img = new Image();
          img.src = content;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 50;
            canvas.height = 50;
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.drawImage(img, 0, 0, 50, 50);
              const resizedImage = canvas.toDataURL("image/png");
              onChange(field.id, resizedImage);
            }
          };
          break;
        case "address":
          const addressData = JSON.parse(content);
          onChange(field.id, addressData);
          break;
        case "currency":
          const amount = content.replace(/[^0-9.]/g, "");
          onChange(field.id, { ...field.value, amount });
          break;
        case "percentage":
          const rate = content.replace(/[^0-9.]/g, "");
          onChange(field.id, { ...field.value, rate });
          break;
        default:
          onChange(field.id, content);
      }
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          {field.label}
        </label>
        <div className="flex items-center gap-2">
          <button
            onClick={generateAIContent}
            disabled={isGenerating}
            className="flex items-center gap-2 px-3 py-1 text-sm text-[#7C3AED] hover:bg-[#7C3AED]/10 rounded-md transition-colors"
          >
            {isGenerating ? (
              <>
                <FiLoader className="animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FiZap />
                Generate with AI
              </>
            )}
          </button>
          <button
            onClick={() => onRemove(field.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>

      {field.type === "longtext" ||
      field.type === "terms" ||
      field.type === "clause" ? (
        <div className="border rounded-md">
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            onInit={handleEditorInit}
            value={field.value}
            onEditorChange={handleEditorChange}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Inter,sans-serif; font-size:14px; }",
            }}
          />
        </div>
      ) : field.type === "table" ? (
        <div
          className="border rounded-md p-4 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: field.value }}
        />
      ) : field.type === "email" ? (
        <input
          type="email"
          value={field.value}
          onChange={(e) => onChange(field.id, e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
          placeholder="Enter email address"
        />
      ) : field.type === "signature" ? (
        <div className="border rounded-md p-4">
          <div className="text-gray-700">{field.value}</div>
        </div>
      ) : field.type === "image" ? (
        <div className="border rounded-md p-4">
          {field.value ? (
            <img
              src={field.value}
              alt="Uploaded"
              className="w-[50px] h-[50px] object-cover rounded"
            />
          ) : (
            <div className="text-gray-700">No image uploaded</div>
          )}
        </div>
      ) : field.type === "address" ? (
        <div className="space-y-2">
          <input
            type="text"
            value={field.value?.street || ""}
            onChange={(e) =>
              onChange(field.id, { ...field.value, street: e.target.value })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
            placeholder="Street"
          />
          <input
            type="text"
            value={field.value?.city || ""}
            onChange={(e) =>
              onChange(field.id, { ...field.value, city: e.target.value })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
            placeholder="City"
          />
          <input
            type="text"
            value={field.value?.state || ""}
            onChange={(e) =>
              onChange(field.id, { ...field.value, state: e.target.value })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
            placeholder="State"
          />
          <input
            type="text"
            value={field.value?.zip || ""}
            onChange={(e) =>
              onChange(field.id, { ...field.value, zip: e.target.value })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
            placeholder="ZIP Code"
          />
        </div>
      ) : field.type === "currency" ? (
        <div className="flex items-center gap-2">
          <select
            value={field.value?.currency || "USD"}
            onChange={(e) =>
              onChange(field.id, { ...field.value, currency: e.target.value })
            }
            className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <input
            type="number"
            value={field.value?.amount || ""}
            onChange={(e) =>
              onChange(field.id, { ...field.value, amount: e.target.value })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
            placeholder="Amount"
          />
        </div>
      ) : field.type === "percentage" ? (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={field.value?.rate || ""}
            onChange={(e) =>
              onChange(field.id, { ...field.value, rate: e.target.value })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
            placeholder="Rate"
          />
          <span className="text-gray-500">%</span>
        </div>
      ) : (
        <input
          type="text"
          value={field.value}
          onChange={(e) => onChange(field.id, e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7C3AED] focus:ring-[#7C3AED] sm:text-sm"
          placeholder={`Enter ${field.label.toLowerCase()}`}
        />
      )}
    </div>
  );
};

export default FormField;
