"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { Template } from "@/types/templates";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import {
  FiType,
  FiImage,
  FiEdit3,
  FiTable,
  FiCalendar,
  FiMail,
  FiPhone,
  FiMapPin,
  FiTrash2,
  FiDollarSign,
  FiFileText,
  FiPenTool,
  FiPercent,
  FiHash,
  FiUpload,
  FiMove,
  FiEye,
  FiSave,
  FiArrowLeft,
  FiX,
  FiDownload,
} from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import SignatureCanvas from "react-signature-canvas";
import type { ResizeCallbackData } from "react-resizable";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import dynamic from "next/dynamic";
import DocumentPreview from "@/components/DocumentPreview";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import type { ReactQuillProps } from "react-quill";
import { toast } from "react-hot-toast";

interface FormField {
  id: string;
  type: string;
  label: string;
  value: any;
  placeholder: string;
  options?: {
    currency?: string;
    imageShape?: "round" | "square" | "rectangle";
    width?: number;
    height?: number;
    tableData?: Array<Array<string>>;
    addressData?: {
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    signatureData?: {
      dataUrl: string;
      width: number;
      height: number;
    };
  };
}

interface SignatureFieldProps {
  value: string;
  onChange: (value: string) => void;
  width?: number;
  height?: number;
}

interface TableFieldProps {
  value: string;
  onChange: (value: string) => void;
  initialRows?: number;
  initialCols?: number;
}

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
}

interface DraggableComponentProps {
  icon: React.ReactNode;
  label: string;
  type: string;
  category?: string;
}

interface ImageFieldProps {
  value: string;
  onChange: (
    value: string,
    options?: { imageShape?: "round" | "square" | "rectangle" }
  ) => void;
  options?: {
    imageShape?: "round" | "square" | "rectangle";
  };
}

const ItemTypes = {
  COMPONENT: "component",
};

const componentCategories = [
  {
    name: "Basic",
    components: [
      { icon: <FiType size={20} />, label: "Text Input", type: "text" },
      { icon: <FiCalendar size={20} />, label: "Date", type: "date" },
      { icon: <FiImage size={20} />, label: "Image Upload", type: "image" },
      { icon: <FiEdit3 size={20} />, label: "Signature", type: "signature" },
      { icon: <FiTable size={20} />, label: "Table", type: "table" },
      { icon: <FiMail size={20} />, label: "Email", type: "email" },
      { icon: <FiPhone size={20} />, label: "Phone", type: "phone" },
      { icon: <FiMapPin size={20} />, label: "Address", type: "address" },
    ],
  },
  {
    name: "Financial",
    components: [
      { icon: <FiDollarSign size={20} />, label: "Currency", type: "currency" },
      {
        icon: <FiPercent size={20} />,
        label: "Percentage",
        type: "percentage",
      },
      { icon: <FiHash size={20} />, label: "Account Number", type: "account" },
    ],
  },
  {
    name: "Documents",
    components: [
      {
        icon: <FiFileText size={20} />,
        label: "Terms & Conditions",
        type: "terms",
      },
      { icon: <FiPenTool size={20} />, label: "Legal Clause", type: "clause" },
    ],
  },
];

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "CHF", symbol: "Fr", name: "Swiss Franc" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
];

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[150px] animate-pulse bg-gray-100 rounded-md" />
  ),
});

const QuillWrapper = forwardRef((props: any, ref: any) => {
  return <ReactQuill {...props} />;
});

QuillWrapper.displayName = "QuillWrapper";

const quillModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [
      {
        font: [
          "Verdana",
          "Times New Roman",
          "Garamond",
          "Georgia",
          "Courier New",
          "cursive",
        ],
      },
    ],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const quillFormats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "script",
  "indent",
  "direction",
  "header",
  "color",
  "background",
  "font",
  "align",
  "link",
  "image",
  "clean",
];

const DraggableComponent = ({ icon, label, type }: DraggableComponentProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `new-${type}`,
    data: { type, label },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`flex items-center p-3 bg-white border border-gray-200 rounded-lg mb-2 cursor-move hover:border-[#7C3AED] hover:shadow-sm transition-all ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="text-[#7C3AED] mr-3">{icon}</div>
      <span className="text-gray-700">{label}</span>
    </div>
  );
};

const DroppableFormArea = ({
  onDrop,
  children,
}: {
  onDrop: (type: string, componentLabel: string) => void;
  children: React.ReactNode;
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "droppable-area",
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 ${isOver ? "bg-[#7C3AED]/10" : ""}`}
      style={{ minHeight: "200px" }}
    >
      {children}
    </div>
  );
};

const RichTextEditor = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection instanceof Selection && selection.rangeCount > 0) {
      return selection.getRangeAt(0);
    }
    return null;
  };

  const restoreSelection = (range: Range | null) => {
    if (range) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  const insertTextAtCursor = (text: string) => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);

    // Move o cursor para depois do texto inserido
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      if (value !== newContent) {
        onChange(newContent);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      insertTextAtCursor("\u00A0\u00A0\u00A0\u00A0");
    } else if (e.key === "Enter") {
      e.preventDefault();
      insertTextAtCursor("\n");

      // Garante que sempre haja um <p> após quebra de linha
      if (editorRef.current) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const p = document.createElement("p");
          p.innerHTML = "<br>";
          range.insertNode(p);
          range.setStartAfter(p);
          range.setEndAfter(p);
          selection.removeAllRanges();
          selection.addRange(range);
          onChange(editorRef.current.innerHTML);
        }
      }
    } else if (e.key === " ") {
      e.preventDefault();
      insertTextAtCursor(" ");
    }
  };

  const execCommand = (command: string, value: string = "") => {
    const savedRange = saveSelection();
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
    restoreSelection(savedRange);
  };

  useEffect(() => {
    if (editorRef.current) {
      // Garante que o editor sempre comece com um parágrafo
      if (!editorRef.current.innerHTML) {
        editorRef.current.innerHTML = "<p><br></p>";
      }

      // Configura o comportamento padrão do editor
      editorRef.current.style.whiteSpace = "pre-wrap";
      editorRef.current.style.wordBreak = "break-word";
      editorRef.current.style.overflowWrap = "break-word";
    }
  }, []);

  return (
    <div className="border border-[#7C3AED] border-opacity-20 rounded-md">
      {/* Primeira linha da barra de ferramentas */}
      <div className="flex items-center gap-2 p-2 border-b border-[#7C3AED] border-opacity-20 bg-white">
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => execCommand("bold")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => execCommand("italic")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            onClick={() => execCommand("underline")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Underline"
          >
            <u>U</u>
          </button>
          <button
            onClick={() => execCommand("strikeThrough")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Strike Through"
          >
            <s>S</s>
          </button>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-300 pr-2">
          <select
            onChange={(e) => execCommand("fontName", e.target.value)}
            className="px-2 py-1 border border-[#7C3AED] border-opacity-20 rounded text-sm min-w-[100px] text-gray-700 hover:text-[#7C3AED]"
            defaultValue=""
          >
            <option value="" disabled>
              Font
            </option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
          </select>
          <select
            onChange={(e) => execCommand("fontSize", e.target.value)}
            className="px-2 py-1 border border-[#7C3AED] border-opacity-20 rounded text-sm min-w-[80px] text-gray-700 hover:text-[#7C3AED]"
            defaultValue=""
          >
            <option value="" disabled>
              Size
            </option>
            <option value="1">8pt</option>
            <option value="2">10pt</option>
            <option value="3">12pt</option>
            <option value="4">14pt</option>
            <option value="5">18pt</option>
            <option value="6">24pt</option>
            <option value="7">36pt</option>
          </select>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => execCommand("justifyLeft")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Align Left"
          >
            ⫷
          </button>
          <button
            onClick={() => execCommand("justifyCenter")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Center"
          >
            ⫸⫷
          </button>
          <button
            onClick={() => execCommand("justifyRight")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Align Right"
          >
            ⫸
          </button>
          <button
            onClick={() => execCommand("justifyFull")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Justify"
          >
            ⫸|⫷
          </button>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => execCommand("insertOrderedList")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Numbered List"
          >
            1.
          </button>
          <button
            onClick={() => execCommand("insertUnorderedList")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Bullet List"
          >
            •
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              const url = prompt("Enter URL:");
              if (url) execCommand("createLink", url);
            }}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Insert Link"
          >
            🔗
          </button>
          <button
            onClick={() => execCommand("unlink")}
            className="p-1.5 rounded hover:bg-[#7C3AED] hover:bg-opacity-10 text-gray-700 hover:text-[#7C3AED]"
            title="Remove Link"
          >
            🔗⃠
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="min-h-[200px] p-4 focus:outline-none text-gray-900 text-base"
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      />

      {/* Character Counter */}
      <div className="text-xs text-gray-500 text-right p-2 border-t border-[#7C3AED] border-opacity-20">
        characters: {(value || "").replace(/<[^>]*>/g, "").length}
      </div>
    </div>
  );
};

const SignatureField = ({ value, onChange }: SignatureFieldProps) => {
  const signatureRef = useRef<SignatureCanvas>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempSignature, setTempSignature] = useState<string>("");

  const handleClear = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
      setTempSignature("");
    }
  };

  const handleEnd = () => {
    if (signatureRef.current) {
      const dataUrl = signatureRef.current.toDataURL();
      setTempSignature(dataUrl);
    }
  };

  const handleConfirm = () => {
    if (tempSignature) {
      onChange(tempSignature);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    handleClear();
    setIsEditing(false);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          if (signatureRef.current) {
            const canvas = signatureRef.current.getCanvas();
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              const scale =
                Math.min(canvas.width / img.width, canvas.height / img.height) *
                0.9;
              const newWidth = img.width * scale;
              const newHeight = img.height * scale;
              const x = (canvas.width - newWidth) / 2;
              const y = (canvas.height - newHeight) / 2;
              ctx.drawImage(img, x, y, newWidth, newHeight);
              handleEnd();
            }
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      {!isEditing ? (
        <div className="space-y-2">
          <button
            onClick={() => setIsEditing(true)}
            className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-colors flex items-center justify-center gap-2 text-gray-600 hover:text-[#7C3AED]"
          >
            <FiEdit3 size={20} />
            <span>Click to sign or upload</span>
          </button>
          {value && value.startsWith("data:image") && (
            <div className="mt-2">
              <img
                src={value}
                alt="Signature"
                className="max-h-20 border border-gray-200 rounded"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4 border border-[#7C3AED] rounded-lg p-4">
          <div className="relative bg-white">
            <SignatureCanvas
              ref={signatureRef}
              canvasProps={{
                className:
                  "border border-gray-300 rounded-md bg-white w-full h-40",
                style: {
                  touchAction: "none",
                  msTouchAction: "none",
                },
              }}
              onEnd={handleEnd}
            />
            <button
              onClick={handleClear}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 text-red-600 hover:text-red-700 transition-colors text-sm flex items-center gap-1"
            >
              <FiTrash2 size={16} />
              <span>Clear</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Or upload a signature:</span>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 bg-white border border-gray-300 rounded-md hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors flex items-center gap-1"
              >
                <FiUpload size={16} />
                <span>Upload Image</span>
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-gray-200">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!tempSignature}
              className={`px-4 py-2 rounded-md text-sm text-white transition-colors ${
                tempSignature
                  ? "bg-[#7C3AED] hover:bg-[#6D28D9]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Confirm Signature
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const TableField = ({
  value,
  onChange,
  initialRows = 3,
  initialCols = 3,
}: TableFieldProps) => {
  const [tableData, setTableData] = useState<Array<Array<string>>>(() => {
    try {
      return value
        ? JSON.parse(value)
        : Array(initialRows).fill(Array(initialCols).fill(""));
    } catch {
      return Array(initialRows).fill(Array(initialCols).fill(""));
    }
  });

  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    cellValue: string
  ) => {
    const newData = tableData.map((row, i) =>
      i === rowIndex
        ? [...row.map((cell, j) => (j === colIndex ? cellValue : cell))]
        : [...row]
    );
    setTableData(newData);
    onChange(JSON.stringify(newData));
  };

  const addRow = () => {
    const newData = [...tableData, Array(tableData[0].length).fill("")];
    setTableData(newData);
    onChange(JSON.stringify(newData));
  };

  const addColumn = () => {
    const newData = tableData.map((row) => [...row, ""]);
    setTableData(newData);
    onChange(JSON.stringify(newData));
  };

  const removeRow = (rowIndex: number) => {
    if (tableData.length > 1) {
      const newData = tableData.filter((_, index) => index !== rowIndex);
      setTableData(newData);
      onChange(JSON.stringify(newData));
    }
  };

  const removeColumn = (colIndex: number) => {
    if (tableData[0].length > 1) {
      const newData = tableData.map((row) =>
        row.filter((_, index) => index !== colIndex)
      );
      setTableData(newData);
      onChange(JSON.stringify(newData));
    }
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="group">
              {tableData[0].map((_, colIndex) => (
                <td
                  key={`header-${colIndex}`}
                  className="px-2 py-2 border-r border-gray-200 last:border-r-0"
                >
                  <button
                    onClick={() => removeColumn(colIndex)}
                    className="w-full opacity-0 group-hover:opacity-100 transition-opacity p-1 text-red-500 hover:text-red-700 flex items-center justify-center"
                    title="Remove column"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </td>
              ))}
              <td className="w-10"></td>
            </tr>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="group">
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-2 py-2 border-r border-gray-200 last:border-r-0"
                  >
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) =>
                        handleCellChange(rowIndex, colIndex, e.target.value)
                      }
                      className="w-full px-2 py-1 border border-transparent focus:border-[#7C3AED] rounded focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                    />
                  </td>
                ))}
                <td className="w-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => removeRow(rowIndex)}
                    className="p-1 text-red-500 hover:text-red-700"
                    title="Remove row"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <button
            onClick={addRow}
            className="px-3 py-1 text-sm bg-white border border-[#7C3AED] text-[#7C3AED] rounded-md hover:bg-[#7C3AED] hover:text-white transition-colors"
          >
            Add Row
          </button>
          <button
            onClick={addColumn}
            className="px-3 py-1 text-sm bg-white border border-[#7C3AED] text-[#7C3AED] rounded-md hover:bg-[#7C3AED] hover:text-white transition-colors"
          >
            Add Column
          </button>
        </div>
      </div>
    </div>
  );
};

const AddressField = ({ value, onChange }: AddressFieldProps) => {
  const [addressData, setAddressData] = useState<{
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }>(
    value && value !== ""
      ? JSON.parse(value)
      : {
          street: "",
          number: "",
          complement: "",
          neighborhood: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
        }
  );

  const handleChange = (key: keyof typeof addressData, fieldValue: string) => {
    const newData = { ...addressData, [key]: fieldValue };
    setAddressData(newData);
    onChange(JSON.stringify(newData));
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Street</label>
          <input
            type="text"
            value={addressData.street}
            onChange={(e) => handleChange("street", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Number</label>
          <input
            type="text"
            value={addressData.number}
            onChange={(e) => handleChange("number", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Complement</label>
        <input
          type="text"
          value={addressData.complement}
          onChange={(e) => handleChange("complement", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Neighborhood</label>
        <input
          type="text"
          value={addressData.neighborhood}
          onChange={(e) => handleChange("neighborhood", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">City</label>
          <input
            type="text"
            value={addressData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">State</label>
          <input
            type="text"
            value={addressData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">ZIP Code</label>
          <input
            type="text"
            value={addressData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Country</label>
          <input
            type="text"
            value={addressData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
        </div>
      </div>
    </div>
  );
};

const EmailField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setIsValid(validateEmail(newValue) || newValue === "");
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={handleChange}
        placeholder="email@example.com"
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
          !isValid && value
            ? "border-red-300 focus:ring-red-500"
            : "border-gray-300 focus:ring-[#7C3AED]"
        } text-gray-900 placeholder-gray-500`}
      />
      {!isValid && value && (
        <p className="mt-1 text-sm text-red-500">
          Please enter a valid email address
        </p>
      )}
    </div>
  );
};

const PhoneField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const formatPhone = (input: string) => {
    const numbers = input.replace(/\D/g, "");

    if (numbers.length <= 13) {
      return numbers.replace(
        /(\d{2})?(\d{2})?(\d{5})?(\d{4})?/,
        function (match, p1, p2, p3, p4) {
          let formatted = "";
          if (p1) formatted += "+" + p1;
          if (p2) formatted += " (" + p2 + ")";
          if (p3) formatted += " " + p3;
          if (p4) formatted += "-" + p4;
          return formatted;
        }
      );
    }
    return numbers;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value);
    onChange(formattedValue);
  };

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="+XX (XX) XXXXX-XXXX"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900 placeholder-gray-500"
    />
  );
};

const ImageField = ({ value, onChange, options }: ImageFieldProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(value || "");
  const [selectedShape, setSelectedShape] = useState<
    "round" | "square" | "rectangle"
  >(options?.imageShape || "square");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setPreviewUrl(dataUrl);
        onChange(dataUrl, { imageShape: selectedShape });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShapeChange = (shape: "round" | "square" | "rectangle") => {
    setSelectedShape(shape);
    if (previewUrl) {
      onChange(previewUrl, { imageShape: shape });
    }
  };

  const getShapeClass = () => {
    switch (selectedShape) {
      case "round":
        return "rounded-full";
      case "square":
        return "rounded-lg";
      case "rectangle":
        return "rounded-lg aspect-video";
      default:
        return "rounded-lg";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 mb-4">
        <button
          type="button"
          onClick={() => handleShapeChange("square")}
          className={`p-2 border rounded-lg ${
            selectedShape === "square"
              ? "border-[#7C3AED] text-[#7C3AED]"
              : "border-gray-300 text-gray-500"
          }`}
        >
          <div className="w-8 h-8 rounded-lg border-2 border-current" />
        </button>
        <button
          type="button"
          onClick={() => handleShapeChange("round")}
          className={`p-2 border rounded-lg ${
            selectedShape === "round"
              ? "border-[#7C3AED] text-[#7C3AED]"
              : "border-gray-300 text-gray-500"
          }`}
        >
          <div className="w-8 h-8 rounded-full border-2 border-current" />
        </button>
        <button
          type="button"
          onClick={() => handleShapeChange("rectangle")}
          className={`p-2 border rounded-lg ${
            selectedShape === "rectangle"
              ? "border-[#7C3AED] text-[#7C3AED]"
              : "border-gray-300 text-gray-500"
          }`}
        >
          <div className="w-12 h-8 rounded-lg border-2 border-current" />
        </button>
      </div>

      {previewUrl ? (
        <div className="relative group">
          <img
            src={previewUrl}
            alt="Uploaded image"
            className={`w-full object-cover ${getShapeClass()}`}
            style={{
              maxHeight: selectedShape === "rectangle" ? "240px" : "320px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FiUpload size={16} />
              Change Image
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-colors"
        >
          <div className="flex flex-col items-center gap-2">
            <FiUpload size={24} className="text-gray-400" />
            <div className="text-sm text-gray-600">
              <span className="text-[#7C3AED] font-medium">
                Click to upload
              </span>{" "}
              or drag and drop
            </div>
            <div className="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </div>
          </div>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
};

const FormField = ({
  field,
  onDelete,
  onChange,
}: {
  field: FormField;
  onDelete: (id: string) => void;
  onChange: (id: string, value: string, options?: any) => void;
}) => {
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [isEditingValue, setIsEditingValue] = useState(false);
  const [labelValue, setLabelValue] = useState(field.label);
  const [tempValue, setTempValue] = useState(field.value);
  const [isGenerating, setIsGenerating] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleLabelChange = (newLabel: string) => {
    setLabelValue(newLabel);
  };

  const handleLabelSave = () => {
    onChange(field.id, field.value, { ...field.options, label: labelValue });
    setIsEditingLabel(false);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };

  const handleValueSave = () => {
    onChange(field.id, tempValue);
    setIsEditingValue(false);
  };

  const handleValueCancel = () => {
    setTempValue(field.value);
    setIsEditingValue(false);
  };

  const isRichTextField =
    field.type === "longtext" ||
    field.type === "terms" ||
    field.type === "clause";

  const generateAIContent = async (fieldType: string, fieldLabel: string) => {
    try {
      setIsGenerating(true);
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fieldType,
          fieldLabel,
          documentType: "Bond Agreement",
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Error generating content:", error);
        throw new Error(`Failed to generate content: ${error}`);
      }

      const data = await response.json();
      console.log("Generated content:", data);

      if (data.error) {
        throw new Error(data.error);
      }

      // Handle the content based on field type
      switch (fieldType) {
        case "longtext":
        case "terms":
        case "clause":
          // For rich text fields, set the HTML content directly
          if (editorRef.current) {
            const editor = editorRef.current as any;
            editor.setContent(data.content);
            onChange(field.id, data.content);
          }
          break;
        case "table":
          // For table fields, set the HTML content
          onChange(field.id, data.content);
          break;
        case "email":
          // For email fields, set the generated email
          onChange(field.id, data.content);
          break;
        case "signature":
          // For signature fields, set the signature content
          onChange(field.id, data.content);
          break;
        case "image":
          // For image fields, set the image data
          onChange(field.id, data.content);
          break;
        case "address":
          try {
            const addressData = JSON.parse(data.content);
            // Update each address field
            Object.entries(addressData).forEach(([key, value]) => {
              const field = document.querySelector(
                `[name="${fieldLabel}.${key}"]`
              ) as HTMLInputElement;
              if (field) {
                field.value = value as string;
                field.dispatchEvent(new Event("input", { bubbles: true }));
              }
            });
          } catch (error) {
            console.error("Error parsing address data:", error);
          }
          break;
        case "currency":
          // For currency fields, update the numeric value
          const numericValue = parseFloat(data.content);
          if (!isNaN(numericValue)) {
            onChange(field.id, String(numericValue));
          }
          break;
        case "percentage":
          // For percentage fields, update the numeric value
          const percentValue = parseFloat(data.content);
          if (!isNaN(percentValue)) {
            onChange(field.id, String(percentValue));
          }
          break;
        default:
          // For all other fields, set the value directly
          onChange(field.id, data.content);
      }
    } catch (error) {
      console.error("Error in generateAIContent:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to generate content"
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#7C3AED] transition-colors group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex-1 flex items-center gap-2">
          {isEditingLabel ? (
            <div className="flex items-center space-x-2 flex-1">
              <input
                type="text"
                value={labelValue}
                onChange={(e) => handleLabelChange(e.target.value)}
                onBlur={handleLabelSave}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleLabelSave();
                  }
                }}
                className="flex-1 text-sm font-medium text-gray-700 border border-gray-300 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED] focus:outline-none px-2 py-1 rounded-md"
                autoFocus
                placeholder="Enter field name"
              />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <label
                className="block text-sm font-medium text-gray-700 cursor-pointer hover:text-[#7C3AED]"
                onClick={() => {
                  setIsEditingLabel(true);
                  setLabelValue(field.label);
                }}
              >
                {field.label || "Click to add label"}
              </label>
              <button
                onClick={() => {
                  setIsEditingLabel(true);
                  setLabelValue(field.label);
                }}
                className="text-gray-400 hover:text-[#7C3AED]"
              >
                <FiEdit3 size={14} />
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => generateAIContent(field.type, field.label)}
            disabled={isGenerating}
            className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${
              isGenerating
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white hover:opacity-90"
            }`}
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V2M12 20v2M6.34 6.34L4.93 4.93M17.66 17.66l1.41 1.41M4 12H2M20 12h2M6.34 17.66l-1.41 1.41M17.66 6.34l1.41-1.41M14 12a2 2 0 11-4 0 2 2 0 014 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Generate with AI</span>
              </>
            )}
          </button>
          <button
            onClick={() => onDelete(field.id)}
            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>

      {isRichTextField ? (
        <div className="rich-text-editor">
          <RichTextEditor
            value={field.value}
            onChange={(value) => {
              onChange(field.id, value);
              setTempValue(value);
            }}
            placeholder={field.placeholder}
          />
        </div>
      ) : (
        <>
          {field.type === "text" && (
            <div className="relative">
              <input
                type="text"
                value={field.value || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900 placeholder-gray-500"
                placeholder={field.placeholder}
              />
            </div>
          )}

          {field.type === "signature" && (
            <SignatureField
              value={field.value}
              onChange={(value) => onChange(field.id, value)}
            />
          )}

          {field.type === "table" && (
            <TableField
              value={field.value}
              onChange={(value) => onChange(field.id, value)}
              initialRows={3}
              initialCols={3}
            />
          )}

          {field.type === "email" && (
            <EmailField
              value={field.value}
              onChange={(value) => onChange(field.id, value)}
            />
          )}

          {field.type === "phone" && (
            <PhoneField
              value={field.value}
              onChange={(value) => onChange(field.id, value)}
            />
          )}

          {field.type === "address" && (
            <div className="text-gray-900">
              <AddressField
                value={
                  typeof field.value === "string"
                    ? field.value
                    : JSON.stringify(field.value)
                }
                onChange={(value) => onChange(field.id, value)}
              />
            </div>
          )}

          {field.type === "date" && (
            <div className="relative">
              <DatePicker
                selected={field.value ? new Date(field.value) : null}
                onChange={(date: Date | null) =>
                  onChange(field.id, date ? date.toISOString() : "")
                }
                className="w-full px-3 py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900 placeholder-gray-500"
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          )}

          {field.type === "currency" && (
            <div className="flex space-x-2">
              <select
                value={field.options?.currency || "USD"}
                onChange={(e) =>
                  onChange(field.id, field.value, {
                    ...field.options,
                    currency: e.target.value,
                  })
                }
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.symbol}
                  </option>
                ))}
              </select>
              <div className="relative flex-1">
                <input
                  type="number"
                  value={field.value || ""}
                  onChange={(e) => onChange(field.id, e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          )}

          {field.type === "percentage" && (
            <div className="relative">
              <input
                type="number"
                value={field.value || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                placeholder="0"
                min="0"
                max="100"
                step="0.01"
                className="w-full px-3 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900 placeholder-gray-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                %
              </div>
            </div>
          )}

          {field.type === "image" && (
            <ImageField
              value={field.value}
              onChange={(value, options) => onChange(field.id, value, options)}
              options={field.options}
            />
          )}

          {field.type === "account" && (
            <div className="relative">
              <input
                type="text"
                value={field.value || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                placeholder="Enter account number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-gray-900 placeholder-gray-500"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const ProgressBar = ({
  completed,
  total,
  onBackToDashboard,
  onPreviewDocument,
}: {
  completed: number;
  total: number;
  onBackToDashboard: () => void;
  onPreviewDocument: () => void;
}) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  const getColor = () => {
    if (percentage < 50) return "bg-orange-500";
    if (percentage < 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <>
      <div className="fixed top-[64px] left-0 right-0 z-50 bg-white shadow-sm px-4 py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-medium text-gray-900">
              Document Progress
            </h2>
            <span className="text-sm text-gray-600">
              {completed}/{total} fields completed
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getColor()}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
      <div className="fixed top-[132px] left-0 right-0 z-40 bg-[#1a1a1a] shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={onBackToDashboard}
              className="px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors flex items-center gap-2"
            >
              <FiArrowLeft size={18} />
              Back to Dashboard
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={onPreviewDocument}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors flex items-center gap-2"
              >
                <FiEye size={18} />
                Preview Document
              </button>
              <button
                onClick={() => {}}
                className="px-4 py-2 bg-[#7C3AED] text-white rounded-md hover:bg-[#6D28D9] transition-colors flex items-center gap-2"
              >
                <FiSave size={18} />
                Save Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SortableFormField = ({
  field,
  onDelete,
  onChange,
}: {
  field: FormField;
  onDelete: (id: string) => void;
  onChange: (id: string, value: string, options?: any) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(100%+8px)] opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          {...attributes}
          {...listeners}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-[#7C3AED] cursor-move"
          title="Drag to reorder"
        >
          <FiMove size={16} />
        </button>
      </div>
      <FormField
        field={field}
        onDelete={onDelete}
        onChange={(id, value, options) => onChange(id, value, options)}
      />
    </div>
  );
};

export default function EditTemplatePage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [template, setTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [documentTitle, setDocumentTitle] = useState("");
  const [completedFields, setCompletedFields] = useState(0);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  const handlePreviewDocument = () => {
    setIsPreviewOpen(true);
  };

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await fetch(`/api/templates/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch template");
        }
        const data = await response.json();
        setTemplate(data);

        // Check for AI-generated content in localStorage
        const savedTemplateData = localStorage.getItem("templateData");
        if (savedTemplateData) {
          const templateData = JSON.parse(savedTemplateData);

          // Set the document title
          setDocumentTitle(templateData.title);

          // Create form fields from the template sections
          const fields = templateData.content.sections.map((section: any) => ({
            id: Math.random().toString(36).substr(2, 9),
            type: "longtext", // Default to longtext for content
            label: section.title,
            value: section.content,
            placeholder: section.title,
          }));

          setFormFields(fields);

          // Clear the localStorage after using it
          localStorage.removeItem("templateData");
        } else {
          // If no AI content, extract fields from template as before
          const fields = extractFields(data.content);
          setFormFields(fields);
          setDocumentTitle(data.title);
        }
      } catch (error) {
        console.error("Error fetching template:", error);
        router.push("/doc-templates");
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [params.id, router]);

  useEffect(() => {
    const completed = formFields.filter(
      (field) => field.value && field.value.trim() !== ""
    ).length;
    setCompletedFields(completed);
  }, [formFields]);

  const extractFields = (content: any): FormField[] => {
    const fields: FormField[] = [];
    const regex = /\[(.*?)\]/g;
    let match;

    if (content.sections) {
      content.sections.forEach((section: any) => {
        const sectionContent = section.content;
        while ((match = regex.exec(sectionContent)) !== null) {
          const fieldName = match[1];
          if (!fields.find((f) => f.placeholder === fieldName)) {
            // Determine field type based on field name
            let fieldType = "text";
            if (fieldName.toLowerCase().includes("date")) {
              fieldType = "date";
            } else if (fieldName.toLowerCase().includes("amount")) {
              fieldType = "currency";
            } else if (fieldName.toLowerCase().includes("rate")) {
              fieldType = "percentage";
            } else if (
              fieldName.toLowerCase().includes("terms") ||
              fieldName.toLowerCase().includes("conditions") ||
              fieldName.toLowerCase().includes("clause") ||
              fieldName.toLowerCase().includes("legal")
            ) {
              fieldType = "longtext";
            }

            fields.push({
              id: Math.random().toString(36).substr(2, 9),
              type: fieldType,
              label: fieldName.replace(/_/g, " "),
              value: "",
              placeholder: fieldName,
              options:
                fieldType === "currency" ? { currency: "USD" } : undefined,
            });
          }
        }
      });
    }

    return fields;
  };

  const handleFieldChange = (id: string, value: string, options?: any) => {
    setFormFields((fields) =>
      fields.map((field) => {
        if (field.id === id) {
          if (options?.label !== undefined) {
            return { ...field, label: options.label };
          }
          return { ...field, value, options: { ...field.options, ...options } };
        }
        return field;
      })
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.data.current?.type) {
      // Handle new component drop
      if (active.id.toString().startsWith("new-")) {
        onDrop(active.data.current.type, active.data.current.label);
        return;
      }
    }

    // Handle reordering
    if (active.id !== over.id) {
      setFormFields((fields) => {
        const oldIndex = fields.findIndex((f) => f.id === active.id);
        const newIndex = fields.findIndex((f) => f.id === over.id);
        return arrayMove(fields, oldIndex, newIndex);
      });
    }
  };

  const onDrop = (type: string, componentLabel: string) => {
    const getDefaultLabel = () => {
      const existingFields = formFields.filter((f) => f.type === type);
      const count = existingFields.length + 1;
      return `${componentLabel} ${count}`;
    };

    const newField: FormField = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      label: getDefaultLabel(),
      value: "",
      placeholder: `new_${type}_field`,
    };
    setFormFields([...formFields, newField]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!template) return null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 mt-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="bg-white shadow-lg p-6 rounded-lg h-fit sticky top-[140px]">
              <h2 className="text-gray-900 text-xl font-semibold mb-6">
                Components
              </h2>
              {componentCategories.map((category) => (
                <div key={category.name} className="mb-6">
                  <h3 className="text-[#7C3AED] font-medium mb-3">
                    {category.name}
                  </h3>
                  {category.components.map((component) => (
                    <DraggableComponent
                      key={component.type}
                      icon={component.icon}
                      label={component.label}
                      type={component.type}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    {isEditingTitle ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={documentTitle}
                          onChange={(e) => setDocumentTitle(e.target.value)}
                          onBlur={() => setIsEditingTitle(false)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              setIsEditingTitle(false);
                            }
                          }}
                          className="text-2xl font-bold text-gray-900 border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                          autoFocus
                        />
                      </div>
                    ) : (
                      <div
                        className="flex items-center gap-2 group cursor-pointer"
                        onClick={() => setIsEditingTitle(true)}
                      >
                        <h1 className="text-2xl font-bold text-gray-900">
                          {documentTitle}
                        </h1>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <FiEdit3
                            size={16}
                            className="text-gray-400 hover:text-[#7C3AED]"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <ProgressBar
                  completed={completedFields}
                  total={formFields.length}
                  onBackToDashboard={handleBackToDashboard}
                  onPreviewDocument={handlePreviewDocument}
                />
              </div>

              <DroppableFormArea onDrop={onDrop}>
                <SortableContext
                  items={formFields.map((f) => f.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-4 pl-8">
                    {formFields.map((field) => (
                      <SortableFormField
                        key={field.id}
                        field={field}
                        onDelete={(id) =>
                          setFormFields((fields) =>
                            fields.filter((f) => f.id !== id)
                          )
                        }
                        onChange={(id, value, options) =>
                          setFormFields((fields) =>
                            fields.map((f) =>
                              f.id === id ? { ...f, value, options } : f
                            )
                          )
                        }
                      />
                    ))}
                  </div>
                </SortableContext>
              </DroppableFormArea>
            </div>
          </div>
        </div>
      </div>
      <DocumentPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        document={{
          title: documentTitle,
          content: {
            sections: formFields.map((field) => ({
              title: field.label,
              content: field.value,
              type: field.type,
              options: field.options,
            })),
          },
        }}
      />
    </DndContext>
  );
}
