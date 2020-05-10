import React, { useState } from 'react';

import PaperAnimation from '@components/common/PaperAnimation';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './style.css';

const Resume = () => {
  const [animated, setAnimated] = useState(true);
  return (
    <div className="resume-container">
      {animated ? (
        <PaperAnimation className="resume">
          <LeftColumn />
          <RightColumn />
        </PaperAnimation>
      ) : (
        <div className="resume">
          <LeftColumn />
          <RightColumn />
        </div>
      )}
    </div>
  );
};

export default Resume;
