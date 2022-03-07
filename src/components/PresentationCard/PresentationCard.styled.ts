import styled from 'styled-components';

export const StyledPresentationCard = styled.div`
  width: 96%;
  height: 10%;
  padding: 16px 0;
  background: var(--dark);
  color: var(--light);
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledPresentationCardName = styled.h1`
  font-size: 100%;
  font-family: inherit;
  margin-bottom: 0;
  font-size: 42px;
  font-weight: bold;

  @media screen and (max-width: 878px) {
    font-size: 32px;
  }
`;

export const StyledPresentationCardTitle = styled.span`
  font-size: 23px;

  @media screen and (max-width: 878px) {
    font-size: 24px;
  }
`;
