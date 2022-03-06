import React from 'react';

import SectionTitle from '@components/SectionTitle';
import TextIcon from '@components/TextIcon';
import PresentationCard from '@components/PresentationCard';
import { getLangData } from '@content/helpers';

import InfoSVG from '@icons/info.svg';
import GroupSVG from '@icons/group.svg';
import InternetSVG from '@icons/internet.svg';
import MailSVG from '@icons/mail.svg';
import PhoneSVG from '@icons/phone.svg';
import LinkedinSVG from '@icons/linkedin.svg';
import GithubSVG from '@icons/github.svg';
import TechnologySVG from '@icons/technology.svg';
import HappySVG from '@icons/happy.svg';
import RacketSVG from '@icons/racket.svg';
import HikingSVG from '@icons/hiking.svg';
import GuitarSVG from '@icons/guitar.svg';
import EarthSVG from '@icons/earth.svg';
import CodeSVG from '@icons/code.svg';
import VideogameSVG from '@icons/videogame.svg';

import { Languages } from '../../../content/constant';

import {
  StyledAboutSection,
  StyledAboutSectionContent,
  StyledHobbiesSection,
  StyledHobbiesSectionColumn,
  StyledHobbiesSectionContent,
  StyledHobbiesSectionIcon,
  StyledLeftColumn,
  StyledLeftPresentationCard,
  StyledPicture,
  StyledPictureSection,
  StyledSocialSection,
  StyledSocialSectionContent,
  StyledTechnologiesSection,
  StyledTechnologiesSectionColumn,
  StyledTechnologiesSectionContent,
  StyledTextIcons,
} from './LeftColumn.styled';

export const LeftColumn = ({ lang }: { lang: Languages }) => {
  const { presentation, about, social, hobbies } = getLangData(lang);
  return (
    <StyledLeftColumn>
      <StyledLeftPresentationCard
        name="CHARLIE HENIN"
        title={presentation.title}
      />
      <StyledPictureSection>
        <StyledPicture src="/images/charlie.png" />
      </StyledPictureSection>
      <StyledAboutSection>
        <SectionTitle iconComponent={InfoSVG} title={about.title} />
        <StyledAboutSectionContent>
          <p>{about.content}</p>
        </StyledAboutSectionContent>
      </StyledAboutSection>
      <StyledSocialSection>
        <SectionTitle iconComponent={GroupSVG} title={social.title} />
        <StyledSocialSectionContent>
          <StyledTextIcons>
            <TextIcon iconComponent={PhoneSVG} text="+33.629.68.53.34" />
            <TextIcon iconComponent={MailSVG} text="charlie.henin@gmail.com" />
            <TextIcon
              iconComponent={InternetSVG}
              text="www.charliehenin.com"
              href="http://www.charliehenin.com"
            />
            <TextIcon
              iconComponent={LinkedinSVG}
              text="charlie-henin"
              href="https://www.linkedin.com/in/charlie-henin"
            />
            <TextIcon
              iconComponent={GithubSVG}
              text="kimchicharlie"
              href="https://github.com/kimchicharlie"
            />
          </StyledTextIcons>
        </StyledSocialSectionContent>
      </StyledSocialSection>
      <StyledTechnologiesSection>
        <SectionTitle iconComponent={TechnologySVG} title="TECHNOLOGIES" />
        <StyledTechnologiesSectionContent>
          <StyledTechnologiesSectionColumn>
            <span>JavaScript</span>
            <span>HTML5 / CSS3</span>
            <span>React.js / Apollo</span>
            <span>Webpack</span>
            <span>GraphQL / Prisma</span>
            <span>Node.js</span>
            <span>Koa / Express</span>
            <span>Jest / Cypress</span>
            <span>Linux / MacOS</span>
            <span>Micro services</span>
          </StyledTechnologiesSectionColumn>
          <StyledTechnologiesSectionColumn>
            <span>MongoDB / SQL</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>GCP / OVH</span>
            <span>AWS / Heroku</span>
            <span>Gitlab / Github</span>
            <span>Jenkins</span>
            <span>Jira</span>
            <span>Agile / Scrum</span>
          </StyledTechnologiesSectionColumn>
        </StyledTechnologiesSectionContent>
      </StyledTechnologiesSection>
      <StyledHobbiesSection>
        <SectionTitle iconComponent={HappySVG} title={hobbies.title} />
        <StyledHobbiesSectionContent>
          <StyledHobbiesSectionColumn>
            <StyledHobbiesSectionIcon
              iconComponent={RacketSVG}
              text={hobbies.items.sports}
              vertical
              iconSize="big"
            />
            <StyledHobbiesSectionIcon
              iconComponent={HikingSVG}
              text={hobbies.items.hiking}
              vertical
              iconSize="big"
            />
            <StyledHobbiesSectionIcon
              iconComponent={EarthSVG}
              text={hobbies.items.travels}
              vertical
              iconSize="big"
            />
            <StyledHobbiesSectionIcon
              iconComponent={GuitarSVG}
              text={hobbies.items.guitar}
              vertical
              iconSize="big"
            />
            <StyledHobbiesSectionIcon
              iconComponent={CodeSVG}
              text={hobbies.items.coding}
              vertical
              iconSize="big"
            />
            <StyledHobbiesSectionIcon
              iconComponent={VideogameSVG}
              text={hobbies.items.videogames}
              vertical
              iconSize="big"
            />
          </StyledHobbiesSectionColumn>
        </StyledHobbiesSectionContent>
      </StyledHobbiesSection>
    </StyledLeftColumn>
  );
};
