import styled from 'styled-components';

export const StyledSectionTitle = styled.div<{ dark?: boolean }>`
  display: flex;
  align-items: center;
  color: var(--light);

  ${props => props.dark && `color: var(--dark);`}
`;

export const StyledSectionTitleLogo = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const StyledSectionTitleText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
