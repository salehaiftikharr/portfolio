"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Github,
  Maximize2,
  Star,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Lightbox, type LightboxMedia } from "@/components/ui/Lightbox";
import {
  Carousel,
  CarouselArrows,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/Carousel";

/* The two flagships get hand-written showcase copy; everything else lives in
   the gallery. Video demos can slot into the media field later. */
const slides = [
  {
    id: "saaya",
    title: "Saaya: Persistent AI Coworker",
    status: "Live · gated demo",
    kicker: "An AI coworker, not a chatbot",
    image: "/saaya-workbench.png",
    imageAlt:
      "The Saaya workbench pausing a git commit at an approval gate while a release job runs",
    description:
      "You hand Saaya real jobs and it keeps them alive across crashes and restarts. Risky commands stop at approval gates until a human signs off, and everything it learns is stored with sources and versions, so you can check where a fact came from and how it changed.",
    highlights: [
      "Durable jobs that survive crashes and restarts",
      "Approval gates that genuinely block risky commands",
      "One coworker across web, Slack, and MCP",
    ],
    tech: ["Python", "FastAPI", "Next.js", "LangGraph", "Postgres", "pgvector"],
    live: "https://saaya-orcin.vercel.app",
    github: "https://github.com/salehaiftikharr/saaya",
    note: "The live demo is passphrase gated to keep model costs sane. Ask me for the key.",
  },
  {
    id: "forge-minions",
    title: "Forge & the Minions",
    status: "Live",
    kicker: "Describe a specialist, forge it, put it to work",
    image: "/forge-live.png",
    imageAlt:
      "The Forge landing page with its hand-labeled evaluation stats: zero unsafe ships and one hundred percent accuracy",
    description:
      "Forge turns a plain English spec into a runnable, tool-using agent, then repairs it through a build, run, judge, and refine loop. Its autonomous minions pick up GitHub and Linear tickets, run the tests in a sandbox, and open a pull request only after a verification gate passes.",
    highlights: [
      "Shipped every legitimate fix, refused every bad one",
      "Zero unsafe ships on a hand-labeled evaluation",
      "Watch a recorded run in the live demo below",
    ],
    tech: ["TypeScript", "Claude API", "LLM Evals", "GitHub API", "Slack API"],
    live: "https://agent-forge-ochre-ten.vercel.app",
    github: "https://github.com/salehaiftikharr/agent-forge",
  },
];

export function TopProjects() {
  const [lightbox, setLightbox] = useState<LightboxMedia | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Top Projects"
          subtitle="The two I would show you first, both running live. Flip through, then browse the gallery for the rest."
        />

        <Carousel>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="pl-1 pr-1">
                <Card hover={false} className="p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({ type: "image", src: slide.image })
                      }
                      aria-label={`Expand ${slide.title} screenshot`}
                      className="group/media relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-background"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full aspect-[16/10] object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover/media:opacity-100">
                        <Maximize2 size={12} /> Click to enlarge
                      </span>
                    </button>

                    <div>
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                          <Star size={11} className="fill-current" />
                          Top project · {index + 1} of {slides.length}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                          />
                          {slide.status}
                        </span>
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-foreground">
                        {slide.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {slide.kicker}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {slide.description}
                      </p>

                      <ul className="mt-4 space-y-1.5">
                        {slide.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0 text-primary"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {slide.tech.map((t) => (
                          <Badge key={t} variant="outline">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <a
                          href={slide.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-glow"
                        >
                          <ExternalLink size={15} />
                          Visit the live app
                        </a>
                        <a
                          href={slide.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          <Github size={15} />
                          Code
                        </a>
                      </div>

                      {slide.note && (
                        <p className="mt-3 text-xs text-muted">{slide.note}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex items-center justify-between">
            <CarouselDots />
            <CarouselArrows />
          </div>
        </Carousel>

        <div className="mt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-glow"
          >
            Browse the full project gallery
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <Lightbox media={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
