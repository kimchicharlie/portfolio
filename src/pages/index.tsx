import React from 'react';
import type { PageProps } from 'gatsby';

import { Layout } from '@components/Layout';
import SEO from '@components/Seo';
import { Introduction } from '@views/Introduction';
import { getLangFromLocation } from '@content/helpers';

const IndexPage = ({ location }: PageProps) => {
  const lang = getLangFromLocation(location);
  return (
    <Layout location={location} lang={lang}>
      <SEO title="Home" />
      <Introduction lang={lang} />
    </Layout>
  );
};

export default IndexPage;
