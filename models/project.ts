import { Media } from "./media";

export type Project = {
  id: string;
  title: string;
  date: string;
  client: string;

  coverImgUrl: string;
  gallery: Media[];

  description: string;
  abstract: string;

  technologies: string[];
  links: string[];
};
