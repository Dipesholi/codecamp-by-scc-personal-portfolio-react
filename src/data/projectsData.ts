export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const defaultProjects: Project[] = [
  {
    title: "Real Estate",
    description: "A responsive real estate application featuring advanced search, property details, and agent contact integration..",
    link: "https://cmarga.com/",
    tags: ["React", "CSS"],
  },
  {
    title: "Study Buddy",
    description: "A tiny productivity app for organizing study sessions.",
    link: "https://example.com",
    tags: ["TypeScript", "Vite"],
  },
  {
    title: "Pixel Planner",
    description: "A pixel-art inspired task board for creative teams.",
    link: "https://example.com",
    tags: ["Design", "UI"],
  },
];

export const projectsData: Project[] = [
  ...defaultProjects,
];
