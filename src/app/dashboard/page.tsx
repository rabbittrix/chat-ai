"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  id: string;
  email: string;
  name: string | null;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (!response.ok) {
          throw new Error("Not authenticated");
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Authentication error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a1f] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a1f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome, {user?.name || user?.email}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="bg-[#1a1a3f] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <Link
                href="/doc-templates"
                className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-center transition-colors"
              >
                Browse Templates
              </Link>
              <Link
                href="/documents"
                className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-center transition-colors"
              >
                My Documents
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1a1a3f] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <p className="text-[#ffffffcc]">No recent activity</p>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-[#1a1a3f] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Account Settings
            </h2>
            <div className="space-y-4">
              <Link
                href="/settings/profile"
                className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-center transition-colors"
              >
                Edit Profile
              </Link>
              <Link
                href="/settings/password"
                className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-center transition-colors"
              >
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
