import * as React from 'react';
import { EmptyMessage } from 'src/components/empty-message';
import { Layout } from 'src/views/layout';

const NotFoundPage = () => (
  <Layout>
    <EmptyMessage>페이지를 찾을 수 없습니다.</EmptyMessage>
  </Layout>
);

export default NotFoundPage;
