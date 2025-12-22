export interface Project {
  id: string;
  title: string;
  role: string;
  type: "professional" | "academic" | "personal";
  featured: boolean;
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
  };
  image?: string;
  duration: string;
  teamSize?: number;
}

export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "databases" | "tools" | "datascience";
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: "work" | "education";
  description: string[];
  techStack?: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
  impact?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  resumeUrl?: string;
}
