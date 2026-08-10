"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

interface AmaItem {
  question: string;
  short: string;
  answer: string;
}

/* The answers live in one card and the questions act as a picker, the same
   interaction language as the minion demo's scenario chips. Nothing hides
   behind an accordion and every question stays scannable. */
export function AmaChips({ items }: { items: AmaItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <button
            key={item.question}
            onClick={() => setActiveIndex(i)}
            aria-pressed={i === activeIndex}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer border",
              i === activeIndex
                ? "bg-primary text-white border-primary"
                : "border-border text-muted hover:text-foreground hover:border-primary/40",
            )}
          >
            {item.short}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-background-alt p-6 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.question}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-live="polite"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-primary">
              <MessageCircleQuestion size={16} />
              {active.question}
            </p>
            <p className="mt-3 leading-relaxed text-foreground/85">
              {active.answer}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-muted">
            {activeIndex + 1} of {items.length}
          </span>
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-glow"
          >
            Next question
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
