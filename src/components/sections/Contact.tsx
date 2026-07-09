"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export function Contact() {
  const links = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "in/salehaiftikharr",
      href: siteConfig.social.linkedin ?? "#",
      icon: Linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "salehaiftikharr",
      href: siteConfig.social.github ?? "#",
      icon: Github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="I am open to new opportunities and always happy to talk"
        />

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-3 w-fit p-3 rounded-lg bg-primary/10">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-medium text-foreground mb-1">
                      {link.label}
                    </h3>
                    <p className="text-muted text-sm break-all">{link.value}</p>
                  </Card>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
