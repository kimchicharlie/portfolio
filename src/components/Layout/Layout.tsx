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
import { Languages } from '../../content/constant';
import { StyledLayoutContainer, StyledLayoutContent } from './Layout.styled';

export const Layout = ({
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
    <StyledLayoutContainer>
      <Header
        location={location}
        lang={lang}
        siteTitle={data.site.siteMetadata.title}
      />
      <StyledLayoutContent>{children}</StyledLayoutContent>
      <Footer lang={lang} />
    </StyledLayoutContainer>
  );
};
