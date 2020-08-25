import React from 'react';
import { Link } from 'gatsby';

import { getLangData } from '@content/helpers';

import './style.css';

const Introduction = ({ lang }) => {
  const { introduction } = getLangData(lang);
  return (
    <div className="introduction-container">
      <div className="introduction-big-text">
        <h1 className="introduction-title">{introduction.title}</h1>
        <p className="introduction-secondary">{introduction.secondary}</p>
        <Link
          className="introduction-link"
          to={lang === 'en' ? '/resume' : `/resume?lang=${lang}`}
        >
          {introduction.link}
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
