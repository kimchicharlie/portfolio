import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import Introduction from '@views/Introduction';
import { getLang } from '@content/helpers';

const IndexPage = () => {
  const lang = getLang();
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction lang={lang} />
    </Layout>
  );
};

export default IndexPage;
