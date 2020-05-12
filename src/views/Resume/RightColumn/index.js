import React from 'react';

import SectionTitle from '@components/SectionTitle';
import HistoricalList from '@components/HistoricalList';
import PresentationCard from '@components/PresentationCard';

import BookSVG from '@icons/book.svg';
import BriefcaseSVG from '@icons/briefcase.svg';
import CommunicationSVG from '@icons/communication.svg';
import FranceSVG from '@icons/france.svg';
import SpainSVG from '@icons/spain.svg';
import UkSVG from '@icons/uk.svg';
import './style.css';

const RightColumn = () => {
  return (
    <div className="right-column">
      <PresentationCard
        name="CHARLIE HENIN"
        title="FULL STACK DEVELOPER"
        className="right-presentation-card"
      />
      <div className="experience-section">
        <SectionTitle iconComponent={BriefcaseSVG} title="EXPERIENCE" dark />
        <HistoricalList
          items={[
            {
              primary: 'Full Stack Developer',
              secondary: '@ SIGFOX (Labège, France)',
              optional: 'Oct 2018 - Present',
              description: [
                'My job at Sigfox is to find technical solutions to business requirements through the development of digital products. But also: read code reviews, write tests, develop tools to simplify developers job, maintain existing services, take part in sprint plannings & sprint reviews.',
              ],
            },
            {
              primary: 'Full Stack Developer',
              secondary: '@ MAESTRO CORPORATION (Toulouse, France)',
              optional: 'Oct 2017 - Oct 2018 & Sep 2016 – Sep 2017 (Intern)',
              description: [
                'Development of REST Microservices, complex high traffic websites, various business applications and external projects.',
              ],
            },
            {
              primary: 'Intern',
              secondary: '@ MAESTRO CORPORATION (Toulouse, France)',
              optional: 'Oct 2014 - Oct 2015',
              description: [
                '- Development of an ERP: NodeJS, AngularJS and MongoDB.',
                '- First steps with ReactJS on some business applications',
              ],
            },
          ]}
        />
      </div>
      <div className="education-section">
        <SectionTitle iconComponent={BookSVG} title="EDUCATION" dark />
        <HistoricalList
          items={[
            {
              primary: 'Expert of Information Technologies',
              secondary: '@ EPITECH (Toulouse & Paris, France)',
              optional: '2012 - 2017',
              description: [
                '- Learning programming tools /paradigms and project management.',
                '- Learning essential relationship and impacts between technology et companies.',
              ],
            },
            {
              primary: 'Master 1 in Computer Science',
              secondary: '@ CHUNG-ANG UNIVERSITY (Seoul, South Korea)',
              optional: '2015 - 2016',
              description: [
                '- Social and cultural experience.',
                '- English skills improvement and korean elementary learning.',
              ],
            },
          ]}
        />
      </div>
      <div className="language-section">
        <SectionTitle iconComponent={CommunicationSVG} title="LANGUAGES" dark />
        <div className="language-content">
          <FranceSVG className="language-flag" />
          <UkSVG className="language-flag" />
          <SpainSVG className="language-flag" />
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
