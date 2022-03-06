import React from 'react';

import { StyledButton } from './Button.styled';

export const Button = ({
  inverted = false,
  ...rest
}: {
  inverted?: boolean;
}) => <StyledButton inverted={inverted} {...rest} />;
