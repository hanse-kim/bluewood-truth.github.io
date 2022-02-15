import React from 'react';
import {getTagUrl} from 'src/utils/common';

const TagButton = ({tag}: {tag: string}) => {
  return (
    <a href={getTagUrl(tag)}>
      <button>{tag}</button>
    </a>
  );
};

export default TagButton;
