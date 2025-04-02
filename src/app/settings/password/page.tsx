"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PasswordInput from "@/components/PasswordInput";

export default function ChangePassword() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("New password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/settings/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update password");
      }

      setSuccess("Password updated successfully");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a1f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Change Password</h1>
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
                htmlFor="currentPassword"
                className="block text-sm font-medium text-white mb-2"
              >
                Current Password
              </label>
              <PasswordInput
                value={formData.currentPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currentPassword: e.target.value,
                  })
                }
                placeholder="Enter your current password"
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-white mb-2"
              >
                New Password
              </label>
              <PasswordInput
                value={formData.newPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    newPassword: e.target.value,
                  })
                }
                placeholder="Enter your new password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-white mb-2"
              >
                Confirm New Password
              </label>
              <PasswordInput
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirm your new password"
              />
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
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7C3AED] hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C3AED] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
