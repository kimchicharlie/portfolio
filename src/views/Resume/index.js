import React, { useState } from 'react';

import PaperAnimation from '@components/PaperAnimation';
import Button from '@components/Button';
import { getLangData } from '@content/helpers';

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

const Resume = ({ lang }) => {
  const [animated, setAnimated] = useState(false);
  const { downloadButton, animationButton } = getLangData(lang);
  return (
    <div className="resume">
      <div className="resume-button-container">
        <Button onClick={() => downloadFile(downloadButton.filename)}>
          {downloadButton.text}
        </Button>
        <Button inverted onClick={() => setAnimated(!animated)}>
          {`${animated ? animationButton.disable : animationButton.enable} ${
            animationButton.animation
          }`}
        </Button>
      </div>
      <div className="resume-container">
        {animated ? (
          <PaperAnimation className="resume-paper">
            <LeftColumn lang={lang} />
            <RightColumn lang={lang} />
          </PaperAnimation>
        ) : (
          <div className="resume-paper">
            <LeftColumn lang={lang} />
            <RightColumn lang={lang} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
