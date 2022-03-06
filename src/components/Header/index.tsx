import { Link } from 'gatsby';
import React from 'react';

import FranceSVG from '@icons/france.svg';
import UkSVG from '@icons/uk.svg';
import { getLangData } from '@content/helpers';
import type { PageProps } from 'gatsby';

import './style.css';
import { Languages } from '../../content/constant';

const Header = ({
  lang,
  location,
}: {
  lang: Languages;
  location: PageProps['location'];
}) => {
  const { header } = getLangData(lang);
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <Link
            to={lang === 'en' ? '/' : `/?lang=${lang}`}
            className="header-link"
          >
            {header.homepage}
          </Link>
          <Link
            to={lang === 'en' ? '/resume' : `/resume?lang=${lang}`}
            className="header-link"
          >
            {header.resume}
          </Link>
        </div>
        <div>
          <Link to={location.pathname} className="language-flag-link">
            <UkSVG className="language-flag" />
          </Link>
          <Link
            to={`${location.pathname}?lang=fr`}
            className="language-flag-link"
          >
            <FranceSVG className="language-flag" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
