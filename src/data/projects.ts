import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "forge-minions",
    title: "Forge & the Minions",
    role: "Creator",
    type: "personal",
    featured: true,
    description:
      'An agent that builds agents, plus a fleet of autonomous "minions" that fix GitHub and Linear issues and open verified pull requests, dispatched from Slack.',
    longDescription:
      'A TypeScript system built on the Claude API. You describe an automation in plain English and Forge generates, tests, and self-repairs a runnable agent. On top of it, autonomous "minions" pick up a GitHub or Linear issue, fix it on a sandboxed clone of the repo, run the test suite, and open a real pull request, but only when the fix passes with no regressions. Otherwise they decline. A verification eval over a labeled ticket set measured zero unsafe ships, meaning the minions never shipped work they should have declined. You dispatch them by messaging a Slack bot.',
    techStack: [
      "TypeScript",
      "Claude API",
      "AI Agents",
      "LLM Evals",
      "GitHub API",
      "Slack API",
      "Linear API",
      "Node.js",
    ],
    highlights: [
      "Autonomous agents that open verified pull requests",
      "A self-repairing loop that tests, fixes, and retests",
      "Verification eval with zero unsafe ships on a labeled set",
      "Dispatched from Slack, working with GitHub and Linear",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/agent-forge",
    },
    video: "/minion-demo.mp4",
    poster: "/minion-demo-poster.jpg",
    duration: "Jun 2026",
  },
  {
    id: "grounded",
    title: "Grounded",
    role: "Creator",
    type: "personal",
    featured: true,
    description:
      "A retrieval question-answering app that answers from a corpus with citations and refuses when the answer is not grounded, now with a spoken voice layer and bring-your-own-document upload.",
    longDescription:
      "A retrieval-augmented question-answering app that guards both ends of the pipeline. A grounding gate refuses to answer when the retrieved evidence is too weak, judged against a relative score baseline rather than a brittle fixed cutoff, and a separate decorrelated model checks every claim in the answer against the sources, with a mechanical quote check confirming the supporting text actually exists in a retrieved chunk. An eval harness measures how often it wrongly marks a supported answer as unsupported. On top of the core, an ElevenLabs voice layer reads answers, and honest refusals, aloud, and a bring-your-own-document mode lets a visitor upload a PDF or text file that is embedded into Postgres with pgvector and answered against through the same gates.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Claude API",
      "OpenAI Embeddings",
      "pgvector",
      "Postgres",
      "ElevenLabs",
      "RAG",
      "LLM Evals",
      "Vercel AI SDK",
    ],
    highlights: [
      "Grounding gate that refuses when retrieval is too weak",
      "Faithfulness check verifies every claim against its source",
      "Voice layer that speaks answers, and refusals, aloud",
      "Bring your own document, backed by Postgres and pgvector",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/grounded",
      live: "https://grounded-theta.vercel.app",
    },
    images: ["/grounded-app.png"],
    duration: "Jun 2026 - Jul 2026",
  },
  {
    id: "analytics-chat-assistant",
    title: "Analytics Chat Assistant",
    role: "Creator",
    type: "personal",
    featured: true,
    description:
      "A chat-native business intelligence tool where natural-language questions become validation-gated SQL, streamed back as charts and KPI cards, with a swap-in Claude or GPT provider.",
    longDescription:
      "A chat-native business-intelligence tool where an LLM turns natural-language questions into a single validation-gated read-only SQL SELECT, runs it through a locked-down Postgres role, and streams the result back as charts and KPI cards. The model provider is a one-line seam, either Claude or GPT, and a 25-case eval harness grades the agent's answers on the data they actually return. It caught a model silently changing a revenue definition. Fully dockerized.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Claude API",
      "PostgreSQL",
      "Vercel AI SDK",
      "Docker",
      "LLM Evals",
    ],
    highlights: [
      "Natural-language questions become validation-gated SQL and live charts",
      "Swap-in Claude or GPT provider seam",
      "25-case eval harness on the production agent pipeline",
      "Read-only database role with SQL safety validation",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/analytics-chat-assistant",
    },
    video: "/aca-demo.mp4",
    poster: "/aca-demo-poster.jpg",
    duration: "Mar 2026 - May 2026",
  },
  {
    id: "application-tracker",
    title: "Application Tracker",
    role: "Creator",
    type: "personal",
    featured: true,
    description:
      "A job-tracking web app plus a Chrome (MV3) extension that scrapes postings from 6 ATS platforms into a profile-based autofill engine.",
    longDescription:
      "A full-stack job-application tracker with Google auth, filterable tables, and persistent state, paired with a Chrome MV3 extension that scrapes postings from six ATS platforms (LinkedIn, Greenhouse, Lever, Ashby, Workday, SmartRecruiters) and autofills application forms from a saved profile. Per-user data is isolated with Supabase row-level security, and the extension's scrapers are pinned by a Vitest suite that fails when a site's markup drifts.",
    techStack: ["React", "Vite", "Supabase", "Chrome MV3", "Vitest", "TypeScript"],
    highlights: [
      "Chrome extension scraping 6 ATS platforms",
      "Profile-based autofill engine",
      "Supabase row-level security per user",
      "Tests that pin the scrapers against DOM drift",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/application_tracker",
    },
    images: [
      "/app-tracker-dashboard.png",
      "/app-tracker-autofill.png",
      "/app-tracker-signin.png",
    ],
    duration: "Mar 2026 - May 2026",
  },
  {
    id: "impact-rehab",
    title: "Impact Rehab",
    role: "Team Lead & Developer",
    type: "academic",
    featured: true,
    description:
      "A full-stack physiotherapy management application that automates MSK score calculations and streamlines patient data workflows.",
    longDescription:
      "Engineered a full-stack physiotherapy management app using PHP, JavaScript, and MySQL, automating MSK score calculations and streamlining patient data workflows. Implemented secure authentication, session management, and real-time analytics with JSON and Chart.js. Led a 3-member team through full SDLC execution, from ER-modeled database design to deployment. Maintained continuous client communication with a Virginia-based physiotherapy practice to gather requirements and feedback.",
    techStack: ["PHP", "MySQL", "JavaScript", "Chart.js", "HTML", "CSS"],
    highlights: [
      "Led 3-member development team",
      "Full SDLC from design to deployment",
      "Real-time analytics dashboard",
      "Secure authentication & session management",
    ],
    links: {
      github: "https://github.com/PTP0411/Impact-Rehab",
      live: "https://impactrehab.co/",
    },
    images: [
      "/doctor_msk.png",
      "/doctor_login.png",
      "/doctor_dashboard.png",
      "/doctor_report.png",
    ],
    duration: "Aug 2025 - Dec 2025",
    teamSize: 3,
  },
  {
    id: "eangus-directory",
    title: "EANGUS Leadership Directory",
    role: "Web Development Intern",
    type: "professional",
    featured: true,
    description:
      "A WordPress plugin managing 1,000+ leadership records across 5 directory sections with secure admin forms and dynamic shortcodes.",
    longDescription:
      "Developed a WordPress plugin using PHP, JavaScript, and MySQL to manage 1,000+ leadership records across 5 directory sections, implementing secure admin forms, dynamic shortcodes, and responsive UI. Streamlined website UI, asset management, and data workflows to improve accuracy and long-term efficiency. Enhanced digital outreach for advocacy, education, and fundraising through web design, messaging, and data visualization.",
    techStack: ["PHP", "JavaScript", "MySQL", "WordPress", "CSS"],
    highlights: [
      "Manages 1,000+ leadership records",
      "Custom WordPress plugin architecture",
      "Dynamic shortcodes for flexible display",
      "Secure admin interface",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/EANGUS-Directory",
      live: "https://eangus.org/",
    },
    images: [
      "/eangus_leadership_2.png",
      "/eangus_form.png",
    ],
    duration: "May 2025 - Aug 2025",
  },
  {
    id: "fuerza",
    title: "Fuerza",
    role: "Full-Stack Developer",
    type: "academic",
    featured: true,
    description:
      "Strava for lifters. A social fitness app to log workouts, share them to a feed, follow other athletes, and give kudos, built because runners have Strava but lifters had nothing like it.",
    longDescription:
      "I started Fuerza as a project for my databases class in 2025, out of a simple frustration: runners have Strava, but there was nothing like it for people who lift. It began as a schema and a handful of endpoints, and I have been rebuilding and improving it ever since into a real social fitness app, where you log a workout, share it to a feed, follow other athletes, give kudos, comment, and message. It is built with React, Node and Express, and MySQL, with JWT authentication and refresh tokens, a normalized relational schema, and a no-backend live-demo mode so anyone can try it instantly. It has come a long way from the class project it started as.",
    techStack: ["React", "Node.js", "Express", "MySQL", "JWT", "REST API"],
    highlights: [
      "Started as a 2025 databases class project, rebuilt ever since",
      "Feed, kudos, comments, follows, and direct messaging",
      "Normalized MySQL schema, JWT auth with refresh tokens",
      "No-backend live-demo mode so anyone can try it instantly",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/fuerza",
      live: "https://fuerza-two.vercel.app",
    },
    images: ["/fuerza-app.png"],
    duration: "Jan 2025 - Present",
  },
];
