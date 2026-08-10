import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "WONK"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saleha.live"),
  alternates: { canonical: "/" },
  title: "Saleha Iftikhar | Forward Deployed Engineer",
  description:
    "Forward deployed engineer at SuperOrgs building AI agents that do real work: Saaya, a persistent AI coworker with approval gates and durable jobs, and Forge, whose autonomous minions open verified pull requests. I design the systems, ship them, and keep them running in production.",
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
    title: "Saleha Iftikhar | Forward Deployed Engineer",
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
        alt: "Saleha Iftikhar, Forward Deployed Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saleha Iftikhar | Forward Deployed Engineer",
    description:
      "I build AI agents that do real work, and full-stack products that ship.",
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: "#f7f7f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saleha Iftikhar",
              url: "https://saleha.live",
              jobTitle: "Forward Deployed Engineer",
              worksFor: { "@type": "Organization", name: "SuperOrgs" },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Gettysburg College",
              },
              sameAs: [
                "https://github.com/salehaiftikharr",
                "https://www.linkedin.com/in/salehaiftikharr/",
              ],
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <AnimatedBackground />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
