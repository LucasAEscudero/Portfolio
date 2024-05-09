import { links } from "./links";

export interface TProject {
  title: string;
  slug: string;
  resume: string;
  description: string;
  role?: { text: string; types: string[] };
  technologies: string[];
  links: {
    github: string;
    deploy?: string;
    youtube?: string;
    swagger?: string;
  };
  image: string;
  date: string;
  tags: { collaborators: boolean; academy: string };
}

export interface TTechnology {
  name: string;
  // order: number;
  type: string;
  url: string;
}

export interface TFormation {
  title: string;
  academy: string;
  description: string;
  certificate?: string;
  status: string;
}

export type SectionName = (typeof links)[number]["name"];
