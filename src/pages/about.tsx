import React from 'react';
import { SEO } from 'src/components/seo';
import { Layout } from 'src/views/layout';
import { Profile } from 'src/views/profile';

export const Head = () => <SEO title="Blog" />;

const AboutPage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default AboutPage;
