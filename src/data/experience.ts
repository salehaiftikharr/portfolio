import { Experience, LeadershipItem } from "@/types";

export const experiences: Experience[] = [
  {
    id: "superorgs",
    title: "Software Engineer",
    company: "SuperOrgs",
    location: "Remote",
    duration: "Jun 2026 - Present",
    type: "work",
    description: [
      "Build a unified department-management dialog in React and TypeScript (Drizzle, PostgreSQL) that pulls member counts, bulk archive, and mass reassignment into one screen, replacing several disconnected admin menus",
      "Fixed a multi-tenant notifications feed that surfaced wrong items and inflated counts by moving filtering to the database query layer, restoring accurate, tenant-scoped data",
      "Take on bigger scope and ship faster by driving agentic coding workflows with Claude Code, owning architecture and final review behind CI gates that catch issues before merge",
    ],
    techStack: ["React", "TypeScript", "Drizzle", "PostgreSQL", "Claude Code"],
  },
  {
    id: "ico-tpm",
    title: "Technical Project Manager",
    company: "Infrastructure and Computing Office, Gettysburg College",
    location: "Gettysburg, PA",
    duration: "Jan 2026 - May 2026",
    type: "work",
    description: [
      "Coordinated campus-wide WiFi analysis by scheduling scans, managing building access, and leading a 3-member team with Velaspan, using Ekahau and Python (NumPy) to process data that informed reliability upgrades",
      "Automated permission-tracking and data-collection scheduling workflows for network site surveys across 30 or more buildings using Python and Pandas, reducing manual effort and shortening survey preparation",
      "Facilitated student feedback sessions to identify connectivity issues and translated user insights into actionable recommendations for network improvements",
    ],
    techStack: ["Python", "NumPy", "Pandas", "Ekahau"],
  },
  {
    id: "impact-rehab",
    title: "Software Developer",
    company: "Impact Rehab",
    location: "Gettysburg, PA",
    duration: "Aug 2025 - Dec 2025",
    type: "work",
    description: [
      "Engineered a full-stack physiotherapy app using PHP, JavaScript, and MySQL, automating MSK score calculations that previously required manual entry",
      "Implemented JWT authentication, session management, and real-time analytics dashboards with Chart.js, cutting clinician reporting time",
      "Led a 3-member team through the full SDLC, designing an ER-modeled database, deploying the application, and coordinating client communication to deliver on schedule",
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Chart.js", "JWT"],
  },
  {
    id: "eangus",
    title: "Web Development Intern",
    company: "Enlisted Association of the National Guard (EANGUS)",
    location: "Washington, DC",
    duration: "May 2025 - Aug 2025",
    type: "work",
    description: [
      "Developed a custom WordPress plugin with PHP, JavaScript, and MySQL that centralized management of 1,000 or more leadership records across five directory sections, reducing record-lookup time by about 30 percent",
      "Streamlined data workflows and asset management, consolidating 5 separate processes into one admin interface",
      "Enhanced digital outreach by creating responsive web pages with TypeScript and Next.js and adding interactive data visualizations with Chart.js",
    ],
    techStack: ["PHP", "JavaScript", "MySQL", "WordPress", "TypeScript", "Next.js"],
  },
  {
    id: "tone-core",
    title: "Software Engineer Intern (Part Time)",
    company: "The Tone Core",
    location: "Remote",
    duration: "May 2025 - Aug 2025",
    type: "work",
    description: [
      "Developed core features for a production Rails 8 and Hotwire trading platform, enabling real-time trades and live notifications for 500 or more beta users",
      "Reduced multi-step trade flow friction by redesigning the UX with Tailwind CSS, lifting user engagement",
      "Built and maintained a CI/CD pipeline using Docker and Kamal, wrote RSpec tests, and enforced code quality with RuboCop",
    ],
    techStack: ["Rails 8", "Hotwire", "PostgreSQL", "Docker", "Kamal"],
  },
];

export const leadership: LeadershipItem[] = [
  {
    id: "eisenhower-fellow",
    title: "Science and Innovation Research Fellow",
    organization: "Eisenhower Institute",
    duration: "Aug 2025 - May 2026",
    description:
      "Selected as a senior fellow leading year-long public policy programming on science and innovation across Gettysburg, Washington D.C., and Japan.",
  },
  {
    id: "ra-coordinator",
    title: "Residential Assistant and Residential Coordinator",
    organization: "Office of Residential Education, Gettysburg College",
    duration: "Aug 2023 - May 2026",
    description:
      "Supervised 6 Residential Assistants and supported 35 or more first-year students through mentorship, community meetings, and conflict resolution.",
  },
  {
    id: "student-life",
    title: "Student Representative, Student Life Committee",
    organization: "Gettysburg College",
    duration: "Aug 2025 - May 2026",
    description:
      "Represented the undergraduate student body in institutional governance discussions on student life and conduct policy.",
  },
  {
    id: "ambassador",
    title: "Campus Tour Guide and International Student Ambassador",
    organization: "Admissions Office, Gettysburg College",
    duration: "Feb 2023 - May 2026",
    description:
      "Guided campus tours and information sessions for prospective students and families as a student ambassador for the College.",
  },
];
