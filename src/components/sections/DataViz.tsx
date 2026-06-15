"use client";

import { motion } from "framer-motion";
import { Github, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dataProjects } from "@/data/dataProjects";

export function DataViz() {
  return (
    <section id="data" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Data & Visualization"
          subtitle="Turning real datasets into clear, honest visual stories"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {dataProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card gradient className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BarChart3 className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <span className="ml-auto text-xs text-muted">
                    {project.note ? `${project.year} · ${project.note}` : project.year}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
