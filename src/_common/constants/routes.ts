import _ from 'lodash';

export const routes = {
  home: '/posts',
  post: (postId?: string) => postId ? `/posts${postId}` : '',
  tags: '/tags',
  tag: (tag?: string) => tag && `/tags/${_.kebabCase(tag)}`,
};
