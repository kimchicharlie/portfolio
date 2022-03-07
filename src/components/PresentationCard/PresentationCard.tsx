import React from 'react';
import {
  StyledPresentationCard,
  StyledPresentationCardName,
  StyledPresentationCardTitle,
} from './PresentationCard.styled';

export const PresentationCard = ({
  name,
  title,
  ...rest
}: {
  name: string;
  title: string;
}) => (
  <StyledPresentationCard {...rest}>
    <StyledPresentationCardName>{name}</StyledPresentationCardName>
    <StyledPresentationCardTitle>{title}</StyledPresentationCardTitle>
  </StyledPresentationCard>
);
