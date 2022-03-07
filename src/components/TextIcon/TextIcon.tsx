import React from 'react';

import {
  StyledTextIcon,
  StyledTextIconLink,
  StyledTextIconSvg,
  StyledTextIconText,
} from './TextIcon.styled';

export const TextIcon = ({
  text,
  iconComponent: IconComponent,
  href,
  vertical = false,
  iconSize = 'small',
  ...rest
}: {
  text: string;
  iconComponent: React.ElementType;
  href?: string;
  vertical?: boolean;
  iconSize?: 'small' | 'medium' | 'big';
}) => (
  <StyledTextIcon vertical={vertical} {...rest}>
    <StyledTextIconSvg
      vertical={vertical}
      iconSize={iconSize}
      as={IconComponent}
    />
    {href ? (
      <StyledTextIconLink href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </StyledTextIconLink>
    ) : (
      <StyledTextIconText>{text}</StyledTextIconText>
    )}
  </StyledTextIcon>
);
