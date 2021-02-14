export type ProjectMedia = {
  type: "image" | "video";
  url: string;
};

export type Project = {
  title: string;
  date: string;
  client: string;
  gallery: ProjectMedia[];
  description: string;
  technologies: string[];
  links: string[];
};
