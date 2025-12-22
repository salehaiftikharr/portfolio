export const skills = {
  languages: [
    "Python",
    "Java",
    "Ruby",
    "JavaScript",
    "PHP",
    "SQL",
    "HTML",
    "CSS",
  ],
  frameworks: ["Ruby on Rails", "React", "Bootstrap", "Streamlit"],
  databases: ["PostgreSQL", "MySQL"],
  tools: ["Docker", "Git", "Kamal", "RSpec", "WordPress", "Gravity Forms"],
  datascience: ["NumPy", "Pandas", "Seaborn"],
};

export const skillCategories = [
  { key: "languages", label: "Languages", icon: "Code" },
  { key: "frameworks", label: "Frameworks", icon: "Layers" },
  { key: "databases", label: "Databases", icon: "Database" },
  { key: "tools", label: "Tools & DevOps", icon: "Wrench" },
  { key: "datascience", label: "Data Science", icon: "BarChart" },
] as const;
