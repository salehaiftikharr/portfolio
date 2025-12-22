"use client";

import { ExternalLink, Github, Users } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Project } from "@/types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card gradient className="h-full flex flex-col">
        {/* Project Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center border border-border">
          <span className="text-muted text-sm">Project Preview</span>
        </div>

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
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline">+{project.techStack.length - 5}</Badge>
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
              <span>Live Demo</span>
            </a>
          )}
          <span className="ml-auto text-xs text-muted">{project.duration}</span>
        </div>
      </Card>
    </motion.div>
  );
}
