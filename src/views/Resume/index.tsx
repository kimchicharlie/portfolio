import React, { useState } from 'react';
import html2canvas from 'html2canvas';

import PaperAnimation from '@components/PaperAnimation';
import Button from '@components/Button';
import { getLangData } from '@content/helpers';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

import './style.css';
import { Languages } from '../../content/constant';

const Resume = ({ lang }: { lang: Languages }) => {
  const [animated, setAnimated] = useState(false);
  const { downloadButton, animationButton } = getLangData(lang);

  const downloadResume = () => {
    const screenshotTarget = document.querySelector('.resume-paper');

    if (screenshotTarget) {
      html2canvas(screenshotTarget as HTMLElement).then(canvas => {
        const anchor = document.createElement('a');
        anchor.href = canvas
          .toDataURL('image/jpeg')
          .replace('image/jpeg', 'image/octet-stream');
        anchor.target = '_blank';
        anchor.download = 'charlie-henin-resume';
        anchor.click();
      });
    }
  };

  return (
    <div className="resume">
      <div className="resume-button-container">
        <Button onClick={downloadResume}>{downloadButton.text}</Button>
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
