import React, { useState } from 'react';

import PaperAnimation from '@components/PaperAnimation';
import Button from '@components/Button';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './style.css';

const downloadFile = path => {
  const anchor = document.createElement('a');
  anchor.href = path;
  anchor.target = '_blank';
  anchor.download = 'charlie-henin-resume';
  anchor.click();
};

const Resume = () => {
  const [animated, setAnimated] = useState(false);
  return (
    <div className="resume">
      <div className="resume-button-container">
        <Button onClick={() => downloadFile('/charlie.png')}>
          Download Resume
        </Button>
        <Button inverted onClick={() => setAnimated(!animated)}>
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
