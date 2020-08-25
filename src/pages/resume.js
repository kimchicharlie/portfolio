import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import Resume from '@views/Resume';
import { getLang } from '@content/helpers';

const ResumePage = () => {
  const lang = getLang();

  return (
    <Layout>
      <SEO title="Resume" />
      <Resume lang={lang} />
    </Layout>
  );
};

export default ResumePage;
