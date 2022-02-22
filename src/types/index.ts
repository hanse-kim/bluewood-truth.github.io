import {Node} from 'gatsby';

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
  slug?: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
  body: string;
  rawBody: string;
  tableOfContents: TocItem[];
  excerpt: string;
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
