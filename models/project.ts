export type ProjectMedia = {
  type: "image" | "video";
  url: string;
};

export type Project = {
  id: string;
  title: string;
  date: string;
  client: string;

  coverImgUrl: string;
  gallery: ProjectMedia[];

  description: string;
  abstract: string;

  technologies: string[];
  links: string[];
};
