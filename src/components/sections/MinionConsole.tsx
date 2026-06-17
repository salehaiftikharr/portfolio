"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Ban,
  FlaskConical,
  ExternalLink,
  Bot,
  Code2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { minionRuns, type MinionRun } from "@/data/minionRuns";
import { cn } from "@/lib/utils";

const STEP_MS = 430;

const outcomeStyle: Record<
  MinionRun["outcome"]["kind"],
  { icon: typeof Check; ring: string; text: string; chip: string }
> = {
  shipped: {
    icon: Check,
    ring: "border-emerald-400/40 bg-emerald-50",
    text: "text-emerald-700",
    chip: "bg-emerald-100 text-emerald-700",
  },
  declined: {
    icon: Ban,
    ring: "border-amber-400/40 bg-amber-50",
    text: "text-amber-700",
    chip: "bg-amber-100 text-amber-700",
  },
  authored: {
    icon: FlaskConical,
    ring: "border-primary/30 bg-primary/5",
    text: "text-primary-glow",
    chip: "bg-primary/10 text-primary",
  },
};

function DiffView({ diff }: { diff: string }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-background p-3 text-xs leading-relaxed">
      {diff.split("\n").map((line, i) => (
        <div
          key={i}
          className={cn(
            line.startsWith("+") && "text-emerald-600",
            line.startsWith("-") && "text-rose-500",
            line.startsWith("@@") && "text-muted",
            !/^[+\-@]/.test(line) && "text-muted",
          )}
        >
          {line || " "}
        </div>
      ))}
    </pre>
  );
}

export function MinionConsole() {
  const [activeId, setActiveId] = useState(minionRuns[0].id);
  const run = minionRuns.find((r) => r.id === activeId)!;
  const [revealed, setRevealed] = useState(0);
  const [showDiff, setShowDiff] = useState(false);

  useEffect(() => {
    setRevealed(0);
    setShowDiff(false);
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= run.steps.length) clearInterval(timer);
    }, STEP_MS);
    return () => clearInterval(timer);
  }, [activeId, run.steps.length]);

  const done = revealed >= run.steps.length;
  const style = outcomeStyle[run.outcome.kind];
  const OutcomeIcon = style.icon;

  return (
    <section id="minion" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Watch a minion work"
          subtitle="Real, replayed runs of my autonomous agents — pick one and watch it decide. Every pull request below is live on GitHub."
        />

        {/* prompt chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {minionRuns.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveId(r.id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer border",
                r.id === activeId
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted hover:text-foreground hover:border-primary/40",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* console */}
        <div className="rounded-2xl border border-border bg-background-alt/60 shadow-lg overflow-hidden">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <Bot size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground">minion</span>
            <span className="ml-auto flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </span>
          </div>

          <div className="p-4 sm:p-6">
            {/* user prompt */}
            <div className="flex justify-end mb-4">
              <span className="rounded-2xl rounded-br-sm bg-primary px-4 py-2 text-sm text-white max-w-[85%]">
                {run.prompt}
              </span>
            </div>

            {/* streamed steps */}
            <div className="font-mono text-[13px] leading-relaxed space-y-1 min-h-[160px]">
              {run.steps.slice(0, revealed).map((step, i) => (
                <motion.div
                  key={`${activeId}-${i}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted"
                >
                  <span className="text-primary">•</span> {step}
                </motion.div>
              ))}
              {!done && (
                <span className="inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
              )}
            </div>

            {/* outcome */}
            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn("mt-5 rounded-xl border p-4", style.ring)}
                >
                  <div className="flex items-center gap-2">
                    <span className={cn("rounded-full p-1", style.chip)}>
                      <OutcomeIcon size={15} />
                    </span>
                    <span className={cn("font-semibold", style.text)}>
                      {run.outcome.headline}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/80">{run.outcome.reason}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
                    <span>{run.meta}</span>
                    {run.outcome.prUrl && (
                      <a
                        href={run.outcome.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary-glow"
                      >
                        {run.outcome.prLabel}
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {run.diff && (
                      <button
                        onClick={() => setShowDiff((s) => !s)}
                        className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary-glow cursor-pointer"
                      >
                        <Code2 size={13} />
                        {showDiff ? "Hide the change" : "View the change"}
                      </button>
                    )}
                  </div>

                  {showDiff && run.diff && <DiffView diff={run.diff} />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          These are recorded runs of a real system. The full source, the
          verification eval (0 unsafe ships), and every receipt live on{" "}
          <a
            href="https://github.com/salehaiftikharr/agent-forge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-glow"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
