import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="font-mono text-sm text-primary">404</p>
          <h1 className="font-display mt-3 text-4xl text-foreground">
            This page wandered off
          </h1>
          <p className="mt-4 text-muted">
            Even my minions could not find it. The good stuff is all on the
            home page and in the project gallery.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-glow"
            >
              Back home
            </Link>
            <Link
              href="/work"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Project gallery
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
