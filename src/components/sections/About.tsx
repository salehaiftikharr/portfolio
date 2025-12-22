"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/siteConfig";

export function About() {
  return (
    <section id="about" className="py-20 bg-background-alt/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Senior CS student passionate about building impactful software"
        />

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
                Expected: {education.graduationDate}
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
              <ul className="space-y-2">
                {education.awards.map((award) => (
                  <li key={award} className="flex items-center gap-2 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {award}
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
