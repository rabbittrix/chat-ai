import { NextResponse } from "next/server";
import { getTemplateById } from "@/doc-templates";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const template = getTemplateById(params.id);

    if (!template) {
      return new NextResponse(JSON.stringify({ error: "Template not found" }), {
        status: 404,
      });
    }

    return NextResponse.json(template);
  } catch (error) {
    console.error("Error fetching template:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
}
