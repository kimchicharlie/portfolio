import React from 'react';

import PaperAnimation from '@components/PaperAnimation';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './style.css';

const Resume = () => (
  <div className="resume-container">
    <PaperAnimation className="resume-animated">
      <LeftColumn />
      <RightColumn />
    </PaperAnimation>
    <div className="resume">
      <LeftColumn />
      <RightColumn />
    </div>
  </div>
);

export default Resume;
