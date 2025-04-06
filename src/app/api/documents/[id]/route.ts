import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const document = await prisma.documents.findUnique({
      where: {
        id: params.id,
        client: {
          email: session.user.email,
        },
      },
    });

    if (!document) {
      return new Response(JSON.stringify({ error: "Document not found" }), {
        status: 404,
      });
    }

    if (!document.fileData) {
      return new Response(JSON.stringify({ error: "No file data found" }), {
        status: 404,
      });
    }

    // Return the file with appropriate headers
    return new Response(document.fileData, {
      headers: {
        "Content-Type":
          document.fileType === "pdf"
            ? "application/pdf"
            : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${document.title}.${document.fileType}"`,
      },
    });
  } catch (error) {
    console.error("Error fetching document:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch document" }), {
      status: 500,
    });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const data = await request.json();
    const document = await prisma.documents.update({
      where: {
        id: params.id,
        client: {
          email: session.user.email,
        },
      },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(document);
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json(
      { error: "Failed to update document" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    await prisma.documents.delete({
      where: {
        id: params.id,
        client: {
          email: session.user.email,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting document:", error);
    return NextResponse.json(
      { error: "Failed to delete document" },
      { status: 500 }
    );
  }
}
