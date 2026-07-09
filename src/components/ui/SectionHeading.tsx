"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 max-w-2xl"
    >
      <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        <span className="inline-block h-7 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent" />
        {title}
      </h2>
      {subtitle && <p className="text-muted mt-4 text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
