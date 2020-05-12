import React, { useState } from 'react';

import PaperAnimation from '@components/PaperAnimation';
import Button from '@components/Button';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './style.css';

const Resume = () => {
  const [animated, setAnimated] = useState(false);
  return (
    <div className="resume">
      <div className="resume-button-container">
        <Button onClick={() => setAnimated(!animated)}>
          {`${animated ? 'Disable' : 'Enable'} animation`}
        </Button>
      </div>
      <div className="resume-container">
        {animated ? (
          <PaperAnimation className="resume-paper">
            <LeftColumn />
            <RightColumn />
          </PaperAnimation>
        ) : (
          <div className="resume-paper">
            <LeftColumn />
            <RightColumn />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
