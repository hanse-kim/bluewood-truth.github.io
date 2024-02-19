import { type Node } from 'gatsby';

export interface SiteNode extends Node {
  siteMetadata: {
    title: string;
    description: string;
    email: string;
    githubUrl: string;
    githubName: string;
    publishYear: string;
    blogUrl: string;
  };
}

export interface MdxNode extends Node {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    hide: boolean;
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
