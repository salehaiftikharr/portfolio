"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  Users,
  Sparkles,
  Star,
  BadgeCheck,
  Sigma,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { education, siteConfig } from "@/data/siteConfig";

// A distinct icon per honor keeps the grid lively instead of a wall of bullets.
const awardIcon: Record<string, LucideIcon> = {
  "Eisenhower Scholar": Trophy,
  "Keith Pappas Memorial Award": Users,
  "Linnaean Award": Sparkles,
  "Dean's Honors List": Star,
  "Dean's Commendation List": BadgeCheck,
  "Pi Mu Epsilon": Sigma,
};

export function About() {
  return (
    <section id="about" className="py-20 bg-background-alt/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ask Me Anything"
          subtitle="The questions I get most, answered honestly"
        />

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start max-w-5xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="shrink-0 md:sticky md:top-24"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Saleha Iftikhar"
              className="w-44 md:w-52 aspect-[4/5] rounded-2xl object-cover object-top border border-border shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full flex-1"
          >
            <FaqAccordion items={siteConfig.faqs} />
          </motion.div>
        </div>

        <div className="space-y-6">
          {/* Education — a compact, full-width banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card gradient>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {education.school}
                    </h3>
                    <p className="text-muted text-sm mt-0.5">
                      {education.degree}
                      <span className="text-muted/70">
                        {" "}· Minors in {education.minors.join(" & ")}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
                  Graduated {education.graduationDate}
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Honors & Awards — a balanced grid of mini-cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Honors &amp; Awards</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {education.awards.map((award) => {
                const Icon = awardIcon[award.name] ?? Award;
                const term = "term" in award ? award.term : undefined;
                return (
                  <div
                    key={award.name}
                    className="rounded-xl border border-border bg-background-alt p-4 h-full transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 shrink-0">
                        <Icon className="text-primary" size={15} />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <h4 className="font-medium text-foreground leading-snug">
                            {award.name}
                          </h4>
                          {term && (
                            <span className="text-[11px] uppercase tracking-wide text-muted">
                              {term}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted mt-1 leading-snug">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card gradient>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Relevant Coursework
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course) => (
                  <Badge key={course} variant="primary">
                    {course}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
