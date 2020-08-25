import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import Resume from '@views/Resume';
import { getLangFromLocation } from '@content/helpers';

const ResumePage = ({ location }) => {
  const lang = getLangFromLocation(location);
  return (
    <Layout location={location} lang={lang}>
      <SEO title="Resume" />
      <Resume lang={lang} />
    </Layout>
  );
};

export default ResumePage;
