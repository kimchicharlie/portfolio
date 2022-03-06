import styled from 'styled-components';
import PresentationCard from '../../../components/PresentationCard';
import TextIcon from '../../../components/TextIcon';

export const StyledLeftColumn = styled.div`
  height: 100%;
  width: 30%;
  background: var(--dark);
  color: var(--light);

  @media screen and (max-width: 878px) {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledLeftPresentationCard = styled(PresentationCard)`
  display: none;

  @media screen and (max-width: 878px) {
    width: 100%;
    height: 80px;
    padding: 16px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > .presentation-card-name {
      font-size: 32px;
    }

    > .presentation-card-title {
      font-size: 24px;
    }
  }
`;

export const StyledPictureSection = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 878px) {
    margin: 32px auto 0 auto;
    width: 280px;
  }
`;

export const StyledPicture = styled.img`
  background: white;
  background-size: cover;
  border-radius: 50% 50% 50% 50%;
  width: 240px;
  height: 240px;
`;

export const StyledAboutSection = styled.div`
  width: 88%;
  margin: 0 auto;
  margin-top: 32px;
`;

export const StyledAboutSectionContent = styled.div`
  padding-left: 16px;
  margin-top: 8px;
  font-size: 13px;
`;

export const StyledSocialSection = styled.div`
  width: 88%;
  margin: 0 auto;
`;

export const StyledSocialSectionContent = styled.div`
  padding-left: 16px;
  margin-top: 8px;
`;

export const StyledTextIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTechnologiesSection = styled.div`
  width: 88%;
  margin: 0 auto;
  margin-top: 32px;
`;

export const StyledTechnologiesSectionContent = styled.div`
  padding-left: 16px;
  margin-top: 8px;
  display: flex;
  font-size: 14px;
`;

export const StyledTechnologiesSectionColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const StyledHobbiesSection = styled.div`
  width: 88%;
  margin: 0 auto;
  margin-top: 32px;
`;

export const StyledHobbiesSectionContent = styled.div`
  margin-top: 8px;
  font-size: 14px;
  display: flex;

  @media screen and (max-width: 878px) {
    margin-top: 24px;
  }
`;

export const StyledHobbiesSectionColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 878px) {
    padding-bottom: 32px;
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 32px;
  }
`;

export const StyledHobbiesSectionIcon = styled(TextIcon)`
  flex-basis: 50%;

  :not(:nth-child(1)) {
    margin-top: 12px;
  }

  :not(:nth-child(2)) {
    margin-top: 12px;
  }

  @media screen and (max-width: 878px) {
    flex-basis: 16.66%;

    :not(:nth-child(1)) {
      margin: 0;
    }

    :not(:nth-child(2)) {
      margin: 0;
    }
  }

  @media screen and (max-width: 640px) {
    flex-basis: 33.33%;

    :nth-child(4) {
      margin-top: 24px;
    }

    :nth-child(5) {
      margin-top: 24px;
    }

    :nth-child(6) {
      margin-top: 24px;
    }
  }
`;
