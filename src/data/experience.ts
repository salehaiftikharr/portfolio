import { Experience, LeadershipItem } from "@/types";

export const experiences: Experience[] = [
  {
    id: "impact-rehab",
    title: "Team Lead & Developer",
    company: "Impact Rehab",
    location: "Gettysburg, PA",
    duration: "Aug 2025 - Dec 2025",
    type: "work",
    description: [
      "Led a 3-member team through full SDLC execution for a physiotherapy management application",
      "Engineered automated MSK score calculations and streamlined patient data workflows",
      "Implemented secure authentication, session management, and real-time analytics with Chart.js",
      "Maintained continuous client communication with a Virginia-based physiotherapy practice to gather requirements and feedback",
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Chart.js"],
  },
  {
    id: "tone-core",
    title: "Software Engineer Intern",
    company: "The Tone Core (Stealth Startup)",
    location: "Remote",
    duration: "May 2025 - Aug 2025",
    type: "work",
    description: [
      "Developed core features for a Rails 8 + Hotwire trading platform with real-time trades and live notifications",
      "Streamlined UX with Tailwind CSS and optimized multi-step trade flows",
      "Contributed to agile development with GitHub, Docker, PostgreSQL, RSpec tests, and Kamal deployments",
    ],
    techStack: ["Rails 8", "Hotwire", "PostgreSQL", "Docker", "Kamal"],
  },
  {
    id: "eangus",
    title: "Web Development Intern",
    company: "EANGUS (Enlisted Association of the National Guard)",
    location: "Washington, DC",
    duration: "May 2025 - Aug 2025",
    type: "work",
    description: [
      "Developed a WordPress plugin to manage 1,000+ leadership records across 5 directory sections",
      "Streamlined website UI, asset management, and data workflows",
      "Enhanced digital outreach for advocacy, education, and fundraising",
    ],
    techStack: ["PHP", "JavaScript", "MySQL", "WordPress"],
  },
  {
    id: "duke",
    title: "Digital Engagement Analyst",
    company: "Duke Children's Hospital",
    location: "Remote",
    duration: "Aug 2023 - Dec 2023",
    type: "work",
    description: [
      "Analyzed donor engagement data from 500+ phone calls and surveys using Python",
      "Shared data-driven insights with Communications team to optimize website interactions",
      "Helped boost donor engagement through analytical recommendations",
    ],
    techStack: ["Python", "Data Analysis"],
  },
];

export const leadership: LeadershipItem[] = [
  {
    id: "ra-coordinator",
    title: "Residential Assistant & Coordinator",
    organization: "Office of Residential Education, Gettysburg College",
    duration: "Aug 2023 - Present",
    description:
      "Foster a supportive living environment for 35 first-year students by leading community meetings and organizing social events.",
    impact: "Supervise 6 RAs through weekly meetings and mentorship",
  },
  {
    id: "research-fellow",
    title: "Science & Innovation Research Fellow",
    organization: "Gettysburg College",
    duration: "Aug 2025 - Present",
    description:
      "Researching how science advances through diverse innovation pipelines and analyzing how government, academic, and industry groups prioritize financial investments.",
  },
  {
    id: "student-life",
    title: "Student Life Committee Member",
    organization: "Gettysburg College",
    duration: "Jul 2025 - Present",
    description:
      "Contributing to institutional decisions affecting student experience and campus life initiatives.",
  },
  {
    id: "ambassador",
    title: "International Student Ambassador & Tour Guide",
    organization: "Gettysburg College",
    duration: "Sep 2022 - Present",
    description:
      "Representing the international student community and guiding prospective students through campus tours.",
  },
];
