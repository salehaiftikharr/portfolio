import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "forge-minions",
    title: "Forge & the Minions",
    role: "Creator",
    type: "personal",
    featured: true,
    description:
      'An agent that builds agents — plus a fleet of autonomous "minions" that fix GitHub & Linear issues and open verified pull requests, dispatched from Slack.',
    longDescription:
      'A TypeScript system built on the Claude API. Describe an automation in plain English and Forge generates, tests, and self-repairs a runnable agent. On top of it, autonomous "minions" pick up a GitHub or Linear issue, fix it on a sandboxed clone of the repo, run the test suite, and open a real pull request — but only when the fix passes with no regressions; otherwise they decline. A verification eval over a labeled ticket set measured zero unsafe ships (it never shipped work it should have declined). You dispatch minions by messaging a Slack bot.',
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
      "Self-repair loop: test → fix → re-test, with receipts",
      "Verification eval: 0 unsafe ships on a labeled set",
      "Dispatched from Slack; works with GitHub & Linear",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/agent-forge",
    },
    duration: "Jun 2026",
  },
  {
    id: "analytics-chat-assistant",
    title: "Analytics Chat Assistant",
    role: "Creator",
    type: "personal",
    featured: true,
    description:
      "A chat-native BI tool: natural-language questions become validation-gated SQL, streamed back as charts and KPI cards — with a swap-in Claude/GPT provider.",
    longDescription:
      "A chat-native business-intelligence tool where an LLM turns natural-language questions into a single validation-gated read-only SQL SELECT, runs it through a locked-down Postgres role, and streams the result back as charts and KPI cards. The model provider is a one-line seam (Claude or GPT), and a 25-case eval harness grades the agent's answers on the data they actually return — it caught a model silently changing a revenue definition. Fully dockerized.",
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
      "Natural language → validation-gated SQL → live charts",
      "Swap-in Claude/GPT provider seam",
      "25-case eval harness on the production agent pipeline",
      "Read-only DB role + SQL safety validation",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/analytics-chat-assistant",
    },
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
    duration: "Mar 2026 - May 2026",
  },
  {
    id: "data-viz-portfolio",
    title: "Data Visualization Portfolio",
    role: "Data Analyst",
    type: "academic",
    featured: true,
    description:
      "Python data-analysis and visualization projects exploring women in tech, programming-language trends, and wage disparities.",
    longDescription:
      "A portfolio of data-analysis and visualization projects built with Python — cleaning and merging real datasets, then telling clear visual stories about women in tech, programming-language trends, and wage disparities using Pandas, Matplotlib, and Plotly.",
    techStack: ["Python", "Pandas", "Matplotlib", "Plotly", "Jupyter"],
    highlights: [
      "End-to-end data cleaning, merging, and analysis",
      "Interactive visualizations with Plotly",
      "Stories on women in tech & wage disparities",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/DataVisualizationPortfolio",
    },
    duration: "2024",
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
      "A full-stack social fitness platform enabling users to log workouts, share posts, follow others, and direct message.",
    longDescription:
      "Developed a full-stack social fitness platform using React, Node.js/Express, and MySQL, enabling users to log workouts, share posts, follow others, and direct message. Designed normalized relational database schemas with transactional integrity for workouts, posts, follows, and messaging. Implemented JWT-based authentication with refresh tokens, RESTful APIs, and UI updates for real-time user experience.",
    techStack: ["React", "Node.js", "Express", "MySQL", "JWT", "REST API"],
    highlights: [
      "Social media features for fitness",
      "Normalized database design",
      "JWT authentication with refresh tokens",
      "RESTful API architecture",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/fuerza",
    },
    images: [
      "/fuerza_explore.png",
      "/fuerza_signup.png",
      "/fuerza_new_post.png",
      "/fuerza_messages.png",
    ],
    duration: "Jan 2025 - May 2025",
  },
  {
    id: "tone-core",
    title: "The Tone Core",
    role: "Software Engineer Intern",
    type: "professional",
    featured: true,
    description:
      "A real-time trading platform built with Rails 8 and Hotwire, enabling users to execute trades with instant UI updates.",
    longDescription:
      "Developed core features for a production Rails 8 + Hotwire trading platform, enabling real-time trades, user management, and live notifications. Streamlined UX with Tailwind CSS and optimized multi-step trade flows to reduce friction and boost engagement. Contributed to agile development with GitHub, Docker, and PostgreSQL; wrote RSpec tests, enforced RuboCop, and supported Kamal deployments.",
    techStack: [
      "Ruby on Rails 8",
      "Hotwire",
      "PostgreSQL",
      "Docker",
      "Kamal",
      "Tailwind CSS",
      "RSpec",
    ],
    highlights: [
      "Production-deployed trading platform",
      "Real-time UI updates with Hotwire/Turbo",
      "Comprehensive RSpec test coverage",
      "Docker containerization & Kamal deployments",
    ],
    links: {
      github: "https://github.com/the-tone-app/the-tone-core",
    },
    duration: "May 2025 - Aug 2025",
  },
  {
    id: "art-history-timeline",
    title: "Digital Art History Timeline",
    role: "Creator",
    type: "academic",
    featured: true,
    description:
      "An interactive JavaFX desktop app that visualizes the evolution of digital art, with searchable events, detail popups, and images.",
    longDescription:
      "A JavaFX desktop application that lets users explore the history of digital art through an interactive timeline — navigating key events, opening detail popups with images and descriptions, and searching for specific moments. Built with a focus on a clean, intuitive interface.",
    techStack: ["Java", "JavaFX"],
    highlights: [
      "Interactive timeline UI",
      "Searchable events with detail popups",
      "Clean, intuitive desktop interface",
    ],
    links: {
      github: "https://github.com/salehaiftikharr/javaFX-ArtHistoryTimeLine",
    },
    duration: "2024",
  },
];
