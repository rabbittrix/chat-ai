import { NextResponse } from "next/server";
import { comparePasswords } from "@/lib/auth";
import { generateToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await comparePasswords(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = await generateToken(user.id);

    // Set cookie with token
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Return user data (excluding password)
    const { id, name, email: userEmail, role, createdAt, updatedAt } = user;
    return NextResponse.json({
      id,
      name,
      email: userEmail,
      role,
      createdAt,
      updatedAt,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
