export interface DataProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  year: string;
  note?: string;
}

export const dataProjects: DataProject[] = [
  {
    id: "data-viz-portfolio",
    title: "Data Visualization Portfolio",
    description:
      "A collection of Python data-analysis projects on topics I care about, including women in tech, programming-language trends, and wage disparities. Each one cleans a real dataset and turns it into a clear visual story.",
    techStack: ["Python", "Pandas", "Matplotlib", "Plotly", "Jupyter"],
    github: "https://github.com/salehaiftikharr/DataVisualizationPortfolio",
    year: "2024",
  },
  {
    id: "ds311-recreate-remix",
    title: "Recreate and Remix, Developer Wages",
    description:
      "Replicated a published visualization of software developers' wages, then remixed it with adjusted parameters to surface deeper insights.",
    techStack: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/salehaiftikharr/DS311_Recreate-Remix",
    year: "2025",
  },
];
