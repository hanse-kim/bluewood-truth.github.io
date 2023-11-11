import * as React from 'react';
import { EmptyMessage } from 'src/components/empty-message';
import { SEO } from 'src/components/seo';
import { Layout } from 'src/views/layout';

export const Head = () => <SEO />;

const NotFoundPage = () => (
  <Layout>
    <EmptyMessage>페이지를 찾을 수 없습니다.</EmptyMessage>
  </Layout>
);

export default NotFoundPage;
