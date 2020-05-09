import React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/Layout';
import Image from '@components/Image';
import Introduction from '@components/Introduction';
import SEO from '@components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
  </Layout>
);

export default IndexPage;
