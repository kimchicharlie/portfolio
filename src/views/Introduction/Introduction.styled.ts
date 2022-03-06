import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledIntroductionContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledIntroductionContent = styled.div`
  margin-left: 10%;
  font-size: 56px;
  line-height: 1.1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    font-size: 48px;
  }

  @media screen and (max-width: 720px) {
    font-size: 40px;
  }

  @media screen and (max-width: 560px) {
    font-size: 32px;
  }

  @media screen and (max-width: 440px) {
    font-size: 24px;
  }
`;

export const StyledIntroductionTitle = styled.h1`
  font-weight: inherit;
  font-size: 100%;
  font-family: inherit;
  margin-bottom: 16px;
`;

export const StyledIntroductionSecondary = styled.p`
  color: var(--primary);
  margin-bottom: 16px;
`;

export const StyledIntroductionLink = styled(Link)`
  color: var(--light);
  text-decoration: none;

  :hover {
    opacity: 0.5;
  }
`;
