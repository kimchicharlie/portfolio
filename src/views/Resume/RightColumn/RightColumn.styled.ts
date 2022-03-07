import styled from 'styled-components';
import { PresentationCard } from '../../../components/PresentationCard';

export const StyledRightColumnContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 70%;
  background: var(--light);
  color: var(--dark);

  @media screen and (max-width: 878px) {
    width: 100%;
  }
`;

export const StyledRightColumnPresentationCard = styled(PresentationCard)`
  @media screen and (max-width: 878px) {
    display: none;
  }
`;

export const StyledExperienceSection = styled.div`
  width: 92%;
  margin: 0 auto;
  margin-top: 24px;
`;

export const StyledEducationSection = styled.div`
  width: 92%;
  margin: 0 auto;
  margin-top: 24px;
`;
