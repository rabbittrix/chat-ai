import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { name } = await request.json();

    // Validate input
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { name },
    });

    // Return updated user data (excluding password)
    const { password: _, ...userWithoutPassword } = updatedUser;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
