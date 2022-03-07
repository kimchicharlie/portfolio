import React from 'react';
import {
  StyledSectionTitle,
  StyledSectionTitleLogo,
  StyledSectionTitleText,
} from './SectionTitle.styled';

export const SectionTitle = ({
  iconComponent: IconComponent,
  title,
  dark = false,
}: {
  iconComponent: React.ElementType;
  title: string;
  dark?: boolean;
}) => {
  return (
    <StyledSectionTitle dark={dark}>
      <StyledSectionTitleLogo>
        <IconComponent />
      </StyledSectionTitleLogo>
      <StyledSectionTitleText>{title}</StyledSectionTitleText>
    </StyledSectionTitle>
  );
};
