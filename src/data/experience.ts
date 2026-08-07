import { Experience, LeadershipItem } from "@/types";

export const experiences: Experience[] = [
  {
    id: "superorgs",
    title: "Forward Deployed Engineer",
    company: "SuperOrgs",
    location: "Remote",
    duration: "Jun 2026 - Present",
    type: "work",
    description: [
      "Built Orion, the platform's AI operations analyst, so non-technical teammates can ask about their org, agents, and spend; background scans read a customer's Slack, Asana, and Linear to propose agents worth building, report what they could not read, and link every finding to the message behind it",
      "Built connectors that discover AI agents running on Dust and Gumloop, place them on the customer's org chart, and ingest real spend from platform analytics exports into the per-agent cost engine, plus an MCP server that opens the same data to Claude",
      "Own how the product charges: Stripe checkout and webhook entitlement sync for the first self-serve revenue, then per-run credit metering into an append-only signed ledger with idempotent writes, per-org caps that gate new work, and a dashboard showing per-customer margin against vendor cost",
      "Delivered the AI Services marketplace end to end: a provider catalog with admin CRUD, buyer-led hiring requests backed by statements of work, and a referral-fees portal where external providers confirm their fees, every money state transition guarded and audited",
    ],
    techStack: ["TypeScript", "Next.js", "Postgres", "Trigger.dev", "Claude Code"],
  },
  {
    id: "ico-tpm",
    title: "Student Technical Project Manager",
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
    title: "Student Software Developer",
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
      "Supervised 6 Residential Assistants and supported 100 or more first-year students through mentorship, community meetings, and conflict resolution.",
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
