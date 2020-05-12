import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import Introduction from '@views/Introduction';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
  </Layout>
);

export default IndexPage;
