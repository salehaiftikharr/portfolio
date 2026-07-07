"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PenLine } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { writing } from "@/data/writing";

export function Writing() {
  return (
    <section
      id="writing"
      className="py-20 bg-gradient-to-b from-primary/[0.06] to-transparent border-y border-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Writing"
          subtitle="Engineering posts I wrote on shipping AI agents at SuperOrgs"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {writing.map((item, index) => (
            <motion.a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block"
            >
              <Card gradient className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <PenLine className="text-primary" size={22} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-glow transition-colors flex items-start gap-1">
                      <span>{item.title}</span>
                      <ArrowUpRight
                        size={18}
                        className="text-muted group-hover:text-primary-glow transition-colors shrink-0 mt-0.5"
                      />
                    </h3>
                    <p className="text-xs text-muted mt-1">
                      {item.outlet} · {item.date}
                    </p>
                    <p className="text-sm text-muted mt-3">{item.blurb}</p>
                    <p className="text-sm text-primary mt-4 font-medium">Read the post →</p>
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
