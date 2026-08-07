"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I have built, from production apps to academic work"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-glow"
          >
            Full project archive
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
