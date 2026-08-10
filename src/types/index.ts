export interface Project {
  id: string;
  title: string;
  role: string;
  type: "professional" | "academic" | "personal";
  featured: boolean;
  /** The two projects to show someone first; they lead the grid with a badge. */
  flagship?: boolean;
  /** Honest deployment state shown on the card: what a visitor can actually reach. */
  status?: "Live" | "Live · gated demo" | "Client production" | "Source available";
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
  };
  images?: string[];
  /** Optional looping demo video shown as the card cover; takes priority over images. */
  video?: string;
  /** Optional poster frame shown before the video loads. */
  poster?: string;
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
  /** One-line scope of the role, shown above the bullets, mirroring the resume. */
  scope?: string;
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
  /** Short, punchy one-liner for the hero. */
  description: string;
  /** Longer, personable bio for the About section, one entry per paragraph. */
  about: string[];
  /** Conversational "Ask Me Anything" pairs for the About section. The
      short label sits on the picker chip; the full question tops the card. */
  faqs: { question: string; short: string; answer: string }[];
  email: string;
  phone?: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
