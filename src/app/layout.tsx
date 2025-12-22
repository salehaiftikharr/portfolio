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
  title: "Saleha Iftikhar | Software Engineer",
  description:
    "Software Engineer with full-stack experience in Rails, React, and Python. Senior CS student at Gettysburg College with production-level experience building real-time trading platforms and healthcare applications.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "Ruby on Rails",
    "React",
    "Python",
    "data science",
    "Gettysburg College",
  ],
  authors: [{ name: "Saleha Iftikhar" }],
  openGraph: {
    title: "Saleha Iftikhar | Software Engineer",
    description:
      "Building scalable software solutions with modern technologies",
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
