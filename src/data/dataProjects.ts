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
    id: "ds325-movies",
    title: "Movie Trends Analysis, DS325 Final Project",
    description:
      "A collaborative data-science final project analyzing a dataset of the top 10,000 movies. It cleans and merges sources into one dataset, then surfaces trends through exploratory analysis and visualization.",
    techStack: ["Python", "Pandas", "Jupyter", "Data Cleaning"],
    github: "https://github.com/aryamasharma/DataScience325-FinalProject",
    year: "2026",
    note: "team project",
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
