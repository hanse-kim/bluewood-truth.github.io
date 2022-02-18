import {Node} from 'gatsby';

export interface SiteNode extends Node {
  siteMetadata: {
    title: string;
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
}

export interface Tag {
  value: string;
  totalCount: number;
}
