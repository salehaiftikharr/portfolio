"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-3xl">
          {/* Availability pill */}
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background-alt px-4 py-1.5 text-sm text-muted mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to roles across the US · Remote or on site
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fade(0.08)}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5"
          >
            Saleha Iftikhar
          </motion.h1>

          {/* Positioning */}
          <motion.p
            {...fade(0.16)}
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5"
          >
            Forward Deployed Engineer building{" "}
            <span className="text-primary">AI agents</span> and full-stack
            products.
          </motion.p>

          {/* Ethos */}
          <motion.p {...fade(0.24)} className="text-muted text-lg max-w-2xl mb-9 leading-relaxed">
            I am happiest when I am deep in a problem I have not solved before.
            These days that means building AI agents that do real jobs: minions
            that fix live tickets and open pull requests only after the tests
            pass, and Orion, the AI analyst at SuperOrgs, answering customer
            questions in production. I design the systems, ship them, and keep
            them running.
          </motion.p>

          {/* CTAs + socials */}
          <motion.div {...fade(0.32)} className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView()}>
              View my work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Get in touch
            </Button>
            <div className="flex items-center gap-2 sm:ml-2">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
