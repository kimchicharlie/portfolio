import React from 'react';
import type { PageProps } from 'gatsby';

import { Layout } from '@components/Layout';
import { SEO } from '@components/Seo';
import { getLangFromLocation } from '@content/helpers';

const NotFoundPage = ({ location }: PageProps) => {
  const lang = getLangFromLocation(location);
  return (
    <Layout location={location} lang={lang}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
