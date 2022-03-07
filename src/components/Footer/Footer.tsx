import React from 'react';

import LinkedinSVG from '@icons/linkedin.svg';
import GithubSVG from '@icons/github.svg';
import { getLangData } from '@content/helpers';

import { Languages } from '../../content/constant';

import {
  StyledFooter,
  StyledFooterContent,
  StyledFooterLogosContainer,
  StyledFooterLogoLink,
} from './Footer.styled';

export const Footer = ({ lang }: { lang: Languages }) => {
  const { footer } = getLangData(lang);
  return (
    <StyledFooter>
      <StyledFooterContent>
        <div>
          © {new Date().getFullYear()}, {footer.text} & ♥️
        </div>
        <StyledFooterLogosContainer>
          <StyledFooterLogoLink
            href="https://www.linkedin.com/in/charlie-henin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSVG />
          </StyledFooterLogoLink>
          <StyledFooterLogoLink
            href="https://github.com/kimchicharlie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSVG />
          </StyledFooterLogoLink>
        </StyledFooterLogosContainer>
      </StyledFooterContent>
    </StyledFooter>
  );
};
