import React from 'react';

import SectionTitle from '@components/SectionTitle';
import TextIcon from '@components/TextIcon';
import CharlieImage from '@components/Image/Charlie';
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

import './style.css';

const LeftColumn = ({ lang }) => {
  const { presentation, about, social, hobbies } = getLangData(lang);
  return (
    <div className="left-column">
      <PresentationCard
        name="CHARLIE HENIN"
        title={presentation.title}
        className="left-presentation-card"
      />
      <div className="picture-section">
        <div className="picture">
          <CharlieImage />
        </div>
      </div>
      <div className="about-section">
        <SectionTitle iconComponent={InfoSVG} title={about.title} />
        <div className="about-section-content">
          <p>{about.content}</p>
        </div>
      </div>
      <div className="social-section">
        <SectionTitle iconComponent={GroupSVG} title={social.title} />
        <div className="social-section-content">
          <div className="text-icons">
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
          </div>
        </div>
      </div>
      <div className="technologies-section">
        <SectionTitle iconComponent={TechnologySVG} title="TECHNOLOGIES" />
        <div className="technologies-section-content">
          <div className="technologies-section-column">
            <span>JavaScript</span>
            <span>HTML5 / CSS3</span>
            <span>React.js</span>
            <span>Webpack</span>
            <span>Node.js</span>
            <span>Koa / Express</span>
            <span>Jest / Cypress</span>
            <span>Linux / MacOS</span>
            <span>Micro services</span>
          </div>
          <div className="technologies-section-column">
            <span>MongoDB / SQL</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>GCP / OVH</span>
            <span>Gitlab / Github</span>
            <span>Jenkins</span>
            <span>Jira</span>
            <span>Scrum</span>
          </div>
        </div>
      </div>
      <div className="hobbies-section">
        <SectionTitle iconComponent={HappySVG} title={hobbies.title} />
        <div className="hobbies-section-content">
          <div className="hobbies-section-column">
            <TextIcon
              iconComponent={RacketSVG}
              text={hobbies.items.sports}
              vertical
              iconSize="big"
              className="hobbies-section-icon"
            />
            <TextIcon
              iconComponent={HikingSVG}
              text={hobbies.items.hiking}
              vertical
              iconSize="big"
              className="hobbies-section-icon"
            />
            <TextIcon
              iconComponent={EarthSVG}
              text={hobbies.items.travels}
              vertical
              iconSize="big"
              className="hobbies-section-icon"
            />
            <TextIcon
              iconComponent={GuitarSVG}
              text={hobbies.items.guitar}
              vertical
              iconSize="big"
              className="hobbies-section-icon"
            />
            <TextIcon
              iconComponent={CodeSVG}
              text={hobbies.items.coding}
              vertical
              iconSize="big"
              className="hobbies-section-icon"
            />
            <TextIcon
              iconComponent={VideogameSVG}
              text={hobbies.items.videogames}
              vertical
              iconSize="big"
              className="hobbies-section-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
