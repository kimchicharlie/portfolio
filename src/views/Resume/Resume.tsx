import React, { useState } from 'react';
import html2canvas from 'html2canvas';

import PaperAnimation from '@components/PaperAnimation';
import { Button } from '@components/Button';
import { getLangData } from '@content/helpers';

import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';

import { Languages } from '../../content/constant';
import {
  StyledResumeContainer,
  StyledResumeActionsContainer,
  StyledResumePaper,
} from './Resume.styled';

export const Resume = ({ lang }: { lang: Languages }) => {
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
    <StyledResumeContainer>
      <StyledResumeActionsContainer>
        <Button onClick={downloadResume}>{downloadButton.text}</Button>
        <Button inverted onClick={() => setAnimated(!animated)}>
          {`${animated ? animationButton.disable : animationButton.enable} ${
            animationButton.animation
          }`}
        </Button>
      </StyledResumeActionsContainer>
      <div>
        {animated ? (
          <PaperAnimation className="resume-paper">
            <LeftColumn lang={lang} />
            <RightColumn lang={lang} />
          </PaperAnimation>
        ) : (
          <StyledResumePaper>
            <LeftColumn lang={lang} />
            <RightColumn lang={lang} />
          </StyledResumePaper>
        )}
      </div>
    </StyledResumeContainer>
  );
};
