"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  id: string;
  name: string | null;
  email: string;
}

export default function EditProfile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (!response.ok) {
          throw new Error("Not authenticated");
        }
        const data = await response.json();
        setUser(data);
        setFormData({ name: data.name || "" });
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const response = await fetch("/api/settings/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update profile");
      }

      setSuccess("Profile updated successfully");
      setUser({ ...user!, name: formData.name });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setSaving(false);
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
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Edit Profile</h1>
          <Link
            href="/dashboard"
            className="text-[#7C3AED] hover:text-[#6D28D9]"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-[#1a1a3f] rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-[#2a2a5f] placeholder-[#ffffff66] text-white bg-[#1a1a3f] rounded-md focus:outline-none focus:ring-[#7C3AED] focus:border-[#7C3AED] focus:z-10 sm:text-sm"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                disabled
                className="appearance-none relative block w-full px-3 py-2 border border-[#2a2a5f] placeholder-[#ffffff66] text-white bg-[#1a1a3f] rounded-md focus:outline-none focus:ring-[#7C3AED] focus:border-[#7C3AED] focus:z-10 sm:text-sm opacity-50 cursor-not-allowed"
                value={user?.email || ""}
              />
              <p className="mt-1 text-sm text-[#ffffffcc]">
                Email cannot be changed
              </p>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            {success && (
              <div className="text-green-500 text-sm text-center">
                {success}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={saving}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7C3AED] hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C3AED] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
