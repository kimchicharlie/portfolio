import React from 'react';

import { getLangData } from '@content/helpers';

import { Languages } from '../../content/constant';
import {
  StyledIntroductionContainer,
  StyledIntroductionContent,
  StyledIntroductionTitle,
  StyledIntroductionSecondary,
  StyledIntroductionLink,
} from './Introduction.styled';

export const Introduction = ({ lang }: { lang: Languages }) => {
  const { introduction } = getLangData(lang);
  return (
    <StyledIntroductionContainer>
      <StyledIntroductionContent>
        <StyledIntroductionTitle>{introduction.title}</StyledIntroductionTitle>
        <StyledIntroductionSecondary>
          {introduction.secondary}
        </StyledIntroductionSecondary>
        <StyledIntroductionLink
          to={lang === 'en' ? '/resume' : `/resume?lang=${lang}`}
        >
          {introduction.link}
        </StyledIntroductionLink>
      </StyledIntroductionContent>
    </StyledIntroductionContainer>
  );
};
