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
      <h2 className="font-display text-3xl md:text-4xl text-foreground">
        {title}
      </h2>
      {subtitle && <p className="text-muted mt-3 text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
