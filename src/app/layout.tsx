import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Document Creator",
  description: "Create and manage documents with AI assistance",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a1f]`}>
        <Providers>
          <Header />
          <main className="pt-16">{children}</main>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
