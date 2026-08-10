"use client";

import { MotionConfig } from "framer-motion";

/* Every framer-motion animation in the tree honors the visitor's
   prefers-reduced-motion setting through this single wrapper. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
