"use client";

import { motion } from "framer-motion";
import { Users, FlaskConical, Building2, Globe } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadership } from "@/data/experience";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "ra-coordinator": Users,
  "research-fellow": FlaskConical,
  "student-life": Building2,
  ambassador: Globe,
};

export function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-background-alt/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Leadership & Impact"
          subtitle="Beyond code: mentoring, research, and community building"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {leadership.map((item, index) => {
            const Icon = iconMap[item.id] || Users;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary mb-1">
                        {item.organization}
                      </p>
                      <p className="text-xs text-muted mb-3">{item.duration}</p>
                      <p className="text-sm text-muted">{item.description}</p>
                      {item.impact && (
                        <p className="text-sm text-primary mt-2 font-medium">
                          {item.impact}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
