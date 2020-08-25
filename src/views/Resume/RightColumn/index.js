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
              primary: 'Full Stack Engineer',
              secondary: '@ SIGFOX (Labège, France)',
              optional: 'Oct 2018 - Present',
              description: [
                '- Maintain and improve the Sigfox ecosystem platforms (see products list below).',
                '- Rewrite completely legacy Node.js REST API with Koa.',
                '- Write a mobile first Bingo application to demonstrate a low cost Sigfox device at the Sigfox Connect event in Singapore.',
                '- Migrate applications from OVH custom environment to GCP based Kubernetes infrastructure.',
                '- Write and document npm packages from modules reused through our codebases.',
                '- Develop and document Flive: a library of React components implementing the Sigfox’s design system constraints in order to improve the development experience of new platforms.',
                '- Mentor 2 beginner developers through exercices, pair programming & tech explanations.',
              ],
              products: [
                {
                  name: 'Build',
                  url: 'https://build.sigfox.com',
                },
                {
                  name: 'Partner',
                  url: 'https://partners.sigfox.com',
                },
                {
                  name: 'Buy',
                  url: 'https://buy.sigfox.com',
                },
                {
                  name: 'Support',
                  url: 'https://support.sigfox.com',
                },
                {
                  name: "Sens'it",
                  url: 'https://sensit.io',
                },
                {
                  name: 'Taxonomies',
                },
                {
                  name: 'Flive',
                  url: 'https://flive.sigfox.com/',
                },
                {
                  name: 'Bingo',
                  url: 'https://www.bingo-sigfoxconnect.com/',
                },
              ],
            },
            {
              primary: 'Full Stack Developer',
              secondary: '@ MAESTRO CORPORATION (Toulouse, France)',
              optional: 'Sep 2016 - Oct 2018',
              description: [
                'Development of high traffic platforms in the ticketing industry, various business applications and external projects. All built using React.js and Node.js.',
              ],
              products: [
                {
                  name: 'Live Booker',
                  url: 'https://live-booker.fr/',
                },
                {
                  name: 'Next Concert',
                  url: 'https://next-concert.fr',
                },
                {
                  name: 'Hey Alex',
                  url: 'https://hey-alex.fr',
                },
              ],
            },
            {
              primary: 'Intern',
              secondary: '@ MAESTRO CORPORATION (Toulouse, France)',
              optional: 'Oct 2014 - Oct 2015',
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
                '- Learning programming concepts/paradigms (C, C++, Ocaml, Python, ASM, Java) through the development of multiple small projects.',
                '- Courses on various topics including mathematics, network, project management, english, uml, entrepreneurship.',
                '- Vice president of the "BDE" (Students union): animating the campus life by organizing small trips, videogames tournaments, sports games, ...',
                '- Winning the "Toulouse Défi Numérique" Dataviz Award for the project "Où vont nos impots ?".',
                '- Development of a domotic solution to regulate temperature and brightness through switchable glass for the Epitech Innovative Project.',
              ],
            },
            {
              primary: 'Master 1 in Computer Science',
              secondary: '@ CHUNG-ANG UNIVERSITY (Seoul, South Korea)',
              optional: '2015 - 2016',
              description: [
                '- Operating system, software engineering, korean culture & korean language courses.',
                '- Social, cultural experience, great improvement of english skills.',
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
