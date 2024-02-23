import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Context
import { Providers } from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniversalNotes - Community Notes for every website",
  description:
    "UniversalNotes is an open source non-profit browser extension that brings Community Notes from Twitter / X to the rest of the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} tracking-tighter`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
