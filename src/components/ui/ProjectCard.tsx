"use client";

import { useState } from "react";
import { ExternalLink, Github, Users } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { ImageCarousel } from "./ImageCarousel";
import { Project } from "@/types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [showAllTech, setShowAllTech] = useState(false);
  const visibleTech = showAllTech ? project.techStack : project.techStack.slice(0, 5);
  const hasMoreTech = project.techStack.length > 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card gradient className="h-full flex flex-col">
        {/* Project Images Carousel */}
        <ImageCarousel
          images={project.images || []}
          alt={project.title}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          {project.teamSize && (
            <div className="flex items-center gap-1 text-muted text-xs">
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
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="cursor-pointer"
            >
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
              className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm"
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
              className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm"
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
