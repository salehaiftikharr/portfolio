"use client";

import { useState } from "react";
import {
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Github,
  Users,
  Bot,
  BarChart3,
  Brain,
  Chrome,
  FolderGit2,
  Play,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { ImageCarousel } from "./ImageCarousel";
import { Lightbox, type LightboxMedia } from "./Lightbox";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Cover icon for projects that do not ship a screenshot, so their card reads as
// intentional rather than empty.
const coverIcon: Record<string, LucideIcon> = {
  "forge-minions": Bot,
  "saaya": Brain,
  "grounded": ShieldCheck,
  "analytics-chat-assistant": BarChart3,
  "application-tracker": Chrome,
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxMedia | null>(null);
  const visibleTech = showAllTech ? project.techStack : project.techStack.slice(0, 5);
  const hasMoreTech = project.techStack.length > 5;
  const hasImages = !!project.images && project.images.length > 0;
  const hasVideo = !!project.video;
  const Icon = coverIcon[project.id] ?? FolderGit2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      id={project.id}
      className="group scroll-mt-24"
    >
      <Card gradient className="h-full flex flex-col">
        {/* Cover: demo poster with a play affordance, then screenshot
            carousel, then themed art. The video itself only loads inside the
            lightbox, so the gallery never autoplays or downloads media the
            visitor did not ask for. */}
        {hasVideo ? (
          <button
            type="button"
            onClick={() => setLightbox({ type: "video", src: project.video!, poster: project.poster })}
            aria-label={`Play the ${project.title} demo video`}
            className="group/media relative mb-4 block w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-background-alt"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.poster}
              alt={`${project.title} demo preview`}
              loading="lazy"
              className="w-full aspect-video object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white transition-transform group-hover/media:scale-110">
                <Play size={20} className="ml-0.5 fill-current" />
              </span>
            </span>
            <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white">
              Watch demo
            </span>
          </button>
        ) : hasImages ? (
          <ImageCarousel
            images={project.images!}
            alt={project.title}
            onExpand={(src) => setLightbox({ type: "image", src })}
          />
        ) : (
          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg border border-border bg-primary/10">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--color-primary-glow) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <Icon
                className="text-primary-glow transition-transform duration-300 group-hover:scale-110"
                size={42}
                strokeWidth={1.5}
              />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                {project.type === "personal" ? "Personal Project" : project.title}
              </span>
            </div>
          </div>
        )}

        {/* Header */}
        {project.flagship && (
          <span className="mb-2 inline-flex items-center gap-1 self-start rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
            <Star size={11} className="fill-current" />
            Top project
          </span>
        )}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-glow transition-colors">
            {project.title}
          </h3>
          {project.teamSize && (
            <div className="flex items-center gap-1 text-muted text-xs shrink-0">
              <Users size={14} />
              <span>{project.teamSize}</span>
            </div>
          )}
        </div>

        {/* Role */}
        <p className="text-primary text-sm font-medium mb-2">{project.role}</p>

        {/* Description */}
        <p className="text-muted text-sm mb-3">{project.description}</p>

        {/* The card leads with a one-liner and keeps the deeper write-up and
            highlights behind a toggle, so the projects grid stays scannable. */}
        <button
          onClick={() => setShowDetails((s) => !s)}
          className="mb-4 inline-flex items-center gap-1 self-start text-xs font-medium text-primary hover:text-primary-glow cursor-pointer"
        >
          {showDetails ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {showDetails ? "Show less" : "Details & highlights"}
        </button>

        {showDetails && (
          <div className="mb-4 space-y-3">
            <p className="text-sm leading-relaxed text-foreground/80">
              {project.longDescription}
            </p>
            <ul className="space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted">
                  <Check size={14} className="mt-0.5 shrink-0 text-primary-glow" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTech.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {hasMoreTech && (
            <button onClick={() => setShowAllTech(!showAllTech)} className="cursor-pointer">
              <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                {showAllTech ? "Show less" : `+${project.techStack.length - 5}`}
              </Badge>
            </button>
          )}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 border-t border-border">
          {project.status && (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium",
                project.status.startsWith("Live")
                  ? "bg-primary/10 text-primary"
                  : "bg-background text-muted border border-border",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  project.status.startsWith("Live") ? "bg-primary" : "bg-muted/60",
                )}
              />
              {project.status}
            </span>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-primary-glow transition-colors text-sm"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-primary-glow transition-colors text-sm"
            >
              <ExternalLink size={16} />
              <span>Website</span>
            </a>
          )}
          <span className="ml-auto text-xs text-muted">{project.duration}</span>
        </div>
      </Card>
      <Lightbox media={lightbox} onClose={() => setLightbox(null)} />
    </motion.div>
  );
}
