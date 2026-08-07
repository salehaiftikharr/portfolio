import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorkArchive } from "@/components/sections/WorkArchive";

export const metadata: Metadata = {
  title: "Work | Saleha Iftikhar",
  description:
    "The full project archive: agent systems, retrieval Q&A, chat-native business intelligence, and production client work.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <WorkArchive />
      </main>
      <Footer />
    </>
  );
}
