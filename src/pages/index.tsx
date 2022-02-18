import React from 'react';
import {Link} from 'gatsby';
import {Layout} from 'src/views/layout';

const IndexPage = () => {
  return (
    <Layout>
      <ul>
        <li>
          <Link to='/blog'>블로그</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
