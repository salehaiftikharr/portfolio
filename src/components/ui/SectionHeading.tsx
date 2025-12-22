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
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary-glow to-primary bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-muted max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
