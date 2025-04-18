"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PasswordInput from "@/components/PasswordInput";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a1f] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <h2 className="text-3xl font-bold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-[#ffffffcc]">
            Please sign in to your account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email address
              </label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#7C3AED] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border-2 border-[#2a2a5f] placeholder-[#ffffff66] text-white bg-[#1a1a3f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-2"
              >
                Password
              </label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#7C3AED] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                <PasswordInput
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#7C3AED] bg-[#1a1a3f] border-[#ffffff1a] rounded focus:ring-[#7C3AED]"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-[#ffffffcc]"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-[#7C3AED] hover:text-[#6D28D9]"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="relative w-full group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#7C3AED] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative w-full flex justify-center py-2 px-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Signing in..." : "Sign in"}
              </div>
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#ffffffcc]">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-[#7C3AED] hover:text-[#6D28D9]"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
