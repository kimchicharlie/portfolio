import React from 'react';

import SectionTitle from '@components/SectionTitle';
import HistoricalList from '@components/HistoricalList';
import PresentationCard from '@components/PresentationCard';
import { getLangData } from '@content/helpers';

import BookSVG from '@icons/book.svg';
import BriefcaseSVG from '@icons/briefcase.svg';

import './style.css';

const RightColumn = ({ lang }) => {
  const { presentation, experience, education } = getLangData(lang);
  return (
    <div className="right-column">
      <PresentationCard
        name="CHARLIE HENIN"
        title={presentation.title}
        className="right-presentation-card"
      />
      <div className="experience-section">
        <SectionTitle
          iconComponent={BriefcaseSVG}
          title={experience.title}
          dark
        />
        <HistoricalList items={experience.historical.items} />
      </div>
      <div className="education-section">
        <SectionTitle iconComponent={BookSVG} title={education.title} dark />
        <HistoricalList items={education.historical.items} />
      </div>
    </div>
  );
};

export default RightColumn;
