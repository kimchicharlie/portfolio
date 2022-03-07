import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
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

export const StyledFooterContent = styled.div`
  font-size: 16px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

export const StyledFooterLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledFooterLogoLink = styled.a`
  color: var(--primary);
  height: 40px;
  width: 40px;

  :hover {
    opacity: 0.5;
  }

  :not(:first-child) {
    margin-left: 16px;
  }

  @media screen and (max-width: 960px) {
    width: 36px;
    height: 36px;

    :not(:first-child) {
      margin-left: 14px;
    }
  }

  @media screen and (max-width: 720px) {
    width: 32px;
    height: 32px;

    :not(:first-child) {
      margin-left: 12px;
    }
  }

  @media screen and (max-width: 560px) {
    width: 28px;
    height: 28px;

    :not(:first-child) {
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 440px) {
    width: 24px;
    height: 24px;

    :not(:first-child) {
      margin-left: 8px;
    }
  }
`;
