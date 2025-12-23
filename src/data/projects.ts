import { Project } from "@/types";

export const projects: Project[] = [
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
];
