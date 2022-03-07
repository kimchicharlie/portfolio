import React from 'react';

import { SectionTitle } from '@components/SectionTitle';
import HistoricalList from '@components/HistoricalList';
import { getLangData } from '@content/helpers';

import BookSVG from '@icons/book.svg';
import BriefcaseSVG from '@icons/briefcase.svg';

import { Languages } from '../../../content/constant';
import {
  StyledRightColumnContainer,
  StyledRightColumnPresentationCard,
  StyledExperienceSection,
  StyledEducationSection,
} from './RightColumn.styled';

export const RightColumn = ({ lang }: { lang: Languages }) => {
  const { presentation, experience, education } = getLangData(lang);
  return (
    <StyledRightColumnContainer>
      <StyledRightColumnPresentationCard
        name="CHARLIE HENIN"
        title={presentation.title}
      />
      <StyledExperienceSection>
        <SectionTitle
          iconComponent={BriefcaseSVG}
          title={experience.title}
          dark
        />
        <HistoricalList items={experience.historical.items} />
      </StyledExperienceSection>
      <StyledEducationSection>
        <SectionTitle iconComponent={BookSVG} title={education.title} dark />
        <HistoricalList items={education.historical.items} />
      </StyledEducationSection>
    </StyledRightColumnContainer>
  );
};
