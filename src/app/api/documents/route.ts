import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { PDFDocument } from "pdf-lib";
import { Document, Packer, Paragraph, TextRun } from "docx";
import fs from "fs";
import path from "path";

// Ensure the uploads directory exists
const uploadsDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log("Session in GET:", session);

    if (!session?.user?.id) {
      console.log("No session or user ID found");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const documents = await db.document.findMany({
      where: {
        user: {
          id: session.user.id,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(documents);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("Session in POST:", session);

    if (!session?.user?.id) {
      console.log("No session or user ID found");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const data = await request.json();
    console.log("Request data:", data);

    const { title, content, fileType = "pdf" } = data;

    // Generate unique filename
    const filename = `${Date.now()}-${title
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()}.${fileType}`;
    const filePath = path.join(uploadsDir, filename);

    // Convert content to PDF or DOCX
    if (fileType === "pdf") {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      const { width, height } = page.getSize();

      // Add content to PDF
      const contentText = JSON.stringify(content, null, 2);
      page.drawText(contentText, {
        x: 50,
        y: height - 50,
        size: 12,
      });

      const pdfBytes = await pdfDoc.save();
      fs.writeFileSync(filePath, pdfBytes);
    } else {
      // Create DOCX document
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [new TextRun(JSON.stringify(content, null, 2))],
              }),
            ],
          },
        ],
      });

      const buffer = await Packer.toBuffer(doc);
      fs.writeFileSync(filePath, buffer);
    }

    // Create document with file path
    const document = await db.document.create({
      data: {
        title,
        content,
        filePath: `/uploads/${filename}`,
        fileType,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return new Response(JSON.stringify(document), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating document:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create document" }),
      { status: 500 }
    );
  }
}
