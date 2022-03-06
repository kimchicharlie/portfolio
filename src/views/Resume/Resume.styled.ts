import styled from 'styled-components';

export const StyledResumeContainer = styled.div`
  color: black;
  height: 100%;
  background-color: var(--light);
  padding: 40px 0;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 878px) {
    padding: 0;
  }
`;

export const StyledResumeActionsContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 40px auto;

  @media screen and (max-width: 878px) {
    display: none;
  }
`;

export const StyledResumePaper = styled.div`
  margin: 0 auto;
  height: 1415px;
  width: 1000px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  display: flex;

  @media screen and (max-width: 878px) {
    display: flex;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
`;
