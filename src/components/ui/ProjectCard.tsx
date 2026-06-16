"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Users,
  Bot,
  BarChart3,
  Chrome,
  FolderGit2,
  type LucideIcon,
} from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { ImageCarousel } from "./ImageCarousel";
import { Project } from "@/types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Cover icon for projects that do not ship a screenshot, so their card reads as
// intentional rather than empty.
const coverIcon: Record<string, LucideIcon> = {
  "forge-minions": Bot,
  "analytics-chat-assistant": BarChart3,
  "application-tracker": Chrome,
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [showAllTech, setShowAllTech] = useState(false);
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
      className="group"
    >
      <Card gradient className="h-full flex flex-col">
        {/* Cover: demo video, then screenshot carousel, then themed gradient art */}
        {hasVideo ? (
          <video
            src={project.video}
            poster={project.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} demo`}
            className="w-full aspect-video object-contain rounded-lg border border-border bg-background-alt mb-4"
          />
        ) : hasImages ? (
          <ImageCarousel images={project.images!} alt={project.title} />
        ) : (
          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg border border-border bg-gradient-to-br from-primary/25 via-accent/10 to-background-alt">
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
        <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>

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
        <div className="flex items-center gap-3 pt-4 border-t border-border">
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
    </motion.div>
  );
}
