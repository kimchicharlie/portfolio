import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import Resume from '@views/Resume';

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <Resume />
  </Layout>
);

export default ResumePage;
