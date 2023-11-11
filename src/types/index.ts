import { type Node } from 'gatsby';

export interface SiteNode extends Node {
  siteMetadata: {
    title: string;
    email: string;
    githubUrl: string;
    githubId: string;
    publishYear: string;
  };
}

export interface MdxNode extends Node {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
  body: string;
  tableOfContents: TocItem[];
  excerpt: string;
  fields: {
    slug?: string;
  };
}

export interface TocItem {
  url: string;
  title: string;
  items?: TocItem[];
}

export interface Tag {
  value: string;
  totalCount: number;
}
