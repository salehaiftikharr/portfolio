"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface LightboxMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
}

interface LightboxProps {
  media: LightboxMedia | null;
  onClose: () => void;
}

export function Lightbox({ media, onClose }: LightboxProps) {
  useEffect(() => {
    if (!media) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [media, onClose]);

  return (
    <AnimatePresence>
      {media && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
        >
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={22} />
          </button>
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[88vh] w-full max-w-6xl items-center justify-center"
          >
            {media.type === "video" ? (
              <video
                src={media.src}
                poster={media.poster}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-[88vh] w-auto rounded-lg shadow-2xl"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={media.src}
                alt="Enlarged preview"
                className="max-h-[88vh] w-auto rounded-lg object-contain shadow-2xl"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
