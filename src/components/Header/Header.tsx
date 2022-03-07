import React from 'react';

import FranceSVG from '@icons/france.svg';
import UkSVG from '@icons/uk.svg';
import { getLangData } from '@content/helpers';
import type { PageProps } from 'gatsby';

import { Languages } from '../../content/constant';
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderLink,
  StyledLanguageFlagLink,
  StyledLanguageFlag,
} from './Header.styled';

export const Header = ({
  lang,
  location,
}: {
  lang: Languages;
  location: PageProps['location'];
}) => {
  const { header } = getLangData(lang);
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <div>
          <StyledHeaderLink to={lang === 'en' ? '/' : `/?lang=${lang}`}>
            {header.homepage}
          </StyledHeaderLink>
          <StyledHeaderLink
            to={lang === 'en' ? '/resume' : `/resume?lang=${lang}`}
          >
            {header.resume}
          </StyledHeaderLink>
        </div>
        <div>
          <StyledLanguageFlagLink to={location.pathname}>
            <StyledLanguageFlag as={UkSVG} />
          </StyledLanguageFlagLink>
          <StyledLanguageFlagLink to={`${location.pathname}?lang=fr`}>
            <StyledLanguageFlag as={FranceSVG} />
          </StyledLanguageFlagLink>
        </div>
      </StyledHeaderContent>
    </StyledHeader>
  );
};
