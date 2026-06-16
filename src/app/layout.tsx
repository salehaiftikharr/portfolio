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
  metadataBase: new URL("https://saleha.live"),
  title: "Saleha Iftikhar | AI-Native Engineer",
  description:
    "AI-native engineer and recent Computer Science graduate from Gettysburg College. I build autonomous agents and full-stack products, from a fleet of \"minions\" that open verified pull requests to chat-native business intelligence tools.",
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
      "I build AI agents that do real work, and full-stack products that ship.",
    url: "https://saleha.live",
    siteName: "Saleha Iftikhar",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Saleha Iftikhar, AI-Native Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saleha Iftikhar | AI-Native Engineer",
    description:
      "I build AI agents that do real work, and full-stack products that ship.",
    images: ["/og.png"],
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
