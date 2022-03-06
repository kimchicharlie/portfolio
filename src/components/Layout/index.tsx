/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import Header from '@components/Header';
import Footer from '@components/Footer';
import './style.css';
import { Languages } from '../../content/constant';

const Layout = ({
  children,
  lang,
  location,
}: {
  children: React.ReactChildren;
  lang: Languages;
  location: PageProps['location'];
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="main-container">
      <Header
        location={location}
        lang={lang}
        siteTitle={data.site.siteMetadata.title}
      />
      <main className="main-content">{children}</main>
      <Footer lang={lang} />
    </div>
  );
};

export default Layout;
