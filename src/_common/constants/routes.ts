import _ from 'lodash';

export const routes = {
  home: '/blog',
  post: (postId?: string) => postId && `/post/${postId}`,
  tags: '/tags',
  tag: (tag?: string) => tag && `/tags/${_.kebabCase(tag)}`,
};
