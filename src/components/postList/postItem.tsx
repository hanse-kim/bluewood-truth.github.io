import React from 'react';
import {Link} from 'gatsby';
import {MdxNode} from 'src/types';
import {getPostUrl} from 'src/utils/common';
import TagButton from 'src/components/tagButton';

const PostItem = ({node}: {node: MdxNode}) => {
  return (
    <div>
      <Link to={getPostUrl(node.slug)}>
        <h2>{node.frontmatter.title}</h2>
        <div>{node.frontmatter.date}</div>
      </Link>
      {node.frontmatter.tags.map((tag) => (
        <TagButton key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default PostItem;
