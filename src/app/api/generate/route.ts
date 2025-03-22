import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Aqui você implementaria a integração com seu modelo de IA
    // Por exemplo, usando OpenAI ou outro serviço

    const response = `AI response for: ${message}`; // Usando message na resposta simulada

    return NextResponse.json({ response });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Error processing request: ${errorMessage}` },
      { status: 500 }
    );
  }
}
