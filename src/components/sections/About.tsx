"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { education, siteConfig } from "@/data/siteConfig";

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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card gradient className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-1">
                {education.school}
              </h4>
              <p className="text-muted mb-2">{education.degree}</p>
              <p className="text-sm text-muted mb-4">
                Minors: {education.minors.join(", ")}
              </p>
              <p className="text-sm text-primary font-medium">
                Graduated: {education.graduationDate}
              </p>
            </Card>
          </motion.div>

          {/* Awards Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Honors & Awards
                </h3>
              </div>
              <ul className="space-y-2.5">
                {education.awards.map((award) => (
                  <li key={award.name} className="flex gap-2.5 text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>
                      <span className="text-foreground">{award.name}</span>
                      {"description" in award && award.description && (
                        <span className="block text-sm text-muted mt-0.5">
                          {award.description}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Relevant Courses Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
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
