import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import useSearch from 'src/hooks/useSearch';
import {MdxNode} from 'src/types';
import {getPostUrl} from 'src/utils/common';

export const pageQuery = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        frontmatter {
          title
          tags
        }
        rawBody
      }
    }
  }
`;

const SearchModal = () => {
  const {
    allMdx: {nodes},
  } = useStaticQuery<{allMdx: {nodes: MdxNode[]}}>(pageQuery);
  const {results, handleSearchInputChange} = useSearch(
    nodes,
    'rawBody',
    'slug',
    {
      cacheKey: 'search-modal',
    }
  );

  return (
    <div
      style={{
        width: '500px',
        position: 'absolute',
        top: '20%',
        left: '50%',
        backgroundColor: 'white',
        border: '1px solid black',
      }}
    >
      <input onChange={handleSearchInputChange} />
      <ul>
        {results.map((result) => (
          <li key={result.slug}>
            <a href={getPostUrl(result.slug)}>
              <div>{result.frontmatter.tags}</div>
              <h4>{result.frontmatter.title}</h4>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchModal;
