// Grouped by capability rather than tool taxonomy, so the skills section
// tells the same story as the projects above it. Every entry is backed by
// work that appears in a listed role or project.
export const skills = {
  agents: [
    "Claude API",
    "MCP",
    "LangGraph",
    "LangChain Deep Agents",
    "LLM evals",
    "Tool use",
    "Vercel AI SDK",
    "Prompt engineering",
  ],
  product: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Chrome extensions",
  ],
  backend: [
    "Python",
    "FastAPI",
    "Node.js",
    "Express",
    "PostgreSQL",
    "pgvector",
    "MySQL",
    "Supabase",
    "Drizzle",
    "SQL",
    "Java",
    "PHP",
  ],
  reliability: [
    "Vitest",
    "Eval harnesses",
    "Docker",
    "GitHub Actions",
    "Git",
    "Vercel",
  ],
  data: ["NumPy", "Pandas", "Matplotlib", "Plotly", "Seaborn"],
};

export const skillCategories = [
  { key: "agents", label: "Agent Systems & Orchestration", icon: "Sparkles" },
  { key: "product", label: "Product & Interface Engineering", icon: "Layers" },
  { key: "backend", label: "Backend & Data Systems", icon: "Database" },
  { key: "reliability", label: "Reliability, Testing & Delivery", icon: "Wrench" },
  { key: "data", label: "Data Analysis & Visualization", icon: "BarChart" },
] as const;
