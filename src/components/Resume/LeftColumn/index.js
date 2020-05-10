import React from 'react';

import SectionTitle from '@components/Resume/SectionTitle';
import TextIcons from '@components/common/TextIcons';
import TextIcon from '@components/common/TextIcon';
import CharlieImage from '@components/Image/Charlie';

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

import './style.css';

const LeftColumn = () => {
  return (
    <div className="left-column">
      <div className="picture-section">
        <div className="picture">
          <CharlieImage />
        </div>
      </div>
      <div className="about-section">
        <SectionTitle iconComponent={InfoSVG} title="ABOUT ME" />
        <div className="about-section-content">
          <p>
            Hi, I'm Charlie and I love developing digital products using hot
            technologies.
          </p>
        </div>
      </div>
      <div className="social-section">
        <SectionTitle iconComponent={GroupSVG} title="I AM SOCIAL" />
        <div className="social-section-content">
          <TextIcons
            items={[
              {
                iconComponent: PhoneSVG,
                text: '+33.629.68.53.34',
              },
              {
                iconComponent: MailSVG,
                text: 'charlie.henin@gmail.com',
              },
              {
                iconComponent: InternetSVG,
                text: 'www.charliehenin.com',
                href: 'http://www.charliehenin.com',
              },
              {
                iconComponent: LinkedinSVG,
                text: 'charlie-henin',
                href: 'https://www.linkedin.com/in/charlie-henin/',
              },
              {
                iconComponent: GithubSVG,
                text: 'kimchicharlie',
                href: 'https://github.com/kimchicharlie',
              },
            ]}
          />
        </div>
      </div>
      <div className="technologies-section">
        <SectionTitle iconComponent={TechnologySVG} title="TECHNOLOGIES" />
        <div className="technologies-section-content">
          <div className="technologies-section-column">
            <span>HTML5/CSS3</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Koa/Express</span>
            <span>Jest/Cypress</span>
          </div>
          <div className="technologies-section-column">
            <span>MongoDB</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>Gitlab/Github</span>
            <span>Jenkins</span>
          </div>
        </div>
      </div>
      <div className="hobbies-section">
        <SectionTitle iconComponent={HappySVG} title="HOBBIES" />
        <div className="hobbies-section-content">
          <div className="hobbies-section-column">
            <TextIcon
              iconComponent={RacketSVG}
              text="Sports"
              vertical
              iconSize="big"
            />
            <TextIcon
              iconComponent={HikingSVG}
              text="Hiking"
              vertical
              iconSize="big"
              className="hobbies-section-icon"
            />
          </div>
          <div className="hobbies-section-column">
            <TextIcon
              iconComponent={GuitarSVG}
              text="Guitar"
              vertical
              iconSize="big"
            />
            <TextIcon
              iconComponent={EarthSVG}
              text="Travels"
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
