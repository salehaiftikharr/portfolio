import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saleha Iftikhar | AI-Native Engineer",
  description:
    "AI-native engineer and recent Computer Science graduate from Gettysburg College. I build autonomous agents and full-stack products — from a fleet of \"minions\" that open verified pull requests to chat-native BI tools.",
  keywords: [
    "AI engineer",
    "AI agents",
    "Claude API",
    "LLM evaluation",
    "full-stack developer",
    "TypeScript",
    "Next.js",
    "Python",
    "Gettysburg College",
  ],
  authors: [{ name: "Saleha Iftikhar" }],
  openGraph: {
    title: "Saleha Iftikhar | AI-Native Engineer",
    description:
      "Building autonomous agents and full-stack products that ship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
