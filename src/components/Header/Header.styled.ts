import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeader = styled.header`
  position: sticky;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media screen and (max-width: 960px) {
    height: 72px;
  }

  @media screen and (max-width: 720px) {
    height: 64px;
  }

  @media screen and (max-width: 560px) {
    height: 56px;
  }

  @media screen and (max-width: 440px) {
    height: 48px;
  }
`;

export const StyledHeaderContent = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderLink = styled(Link)`
  font-size: 18px;
  height: 100%;
  color: var(--light);
  text-decoration: none;

  :hover {
    opacity: 0.5;
  }

  :not(:first-child) {
    margin-left: 24px;
  }

  @media screen and (max-width: 960px) {
    font-size: 17px;
  }

  @media screen and (max-width: 720px) {
    font-size: 16px;
  }

  @media screen and (max-width: 560px) {
    font-size: 15px;
  }

  @media screen and (max-width: 440px) {
    font-size: 14px;
  }
`;

export const StyledLanguageFlagLink = styled(Link)`
  :not(:last-child) {
    margin-right: 16px;
  }
`;

export const StyledLanguageFlag = styled.div`
  width: 40px;

  @media screen and (max-width: 960px) {
    width: 24px;
  }
`;
