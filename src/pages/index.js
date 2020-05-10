import React from 'react';

import Layout from '@components/Layout';
import Introduction from '@components/Introduction';
import SEO from '@components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Charlie Henin" />
    <Introduction />
  </Layout>
);

export default IndexPage;
