import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import FranceSVG from '@icons/france.svg';
import UkSVG from '@icons/uk.svg';
import { getLang, getData } from '@content/helpers';

import './style.css';

const Header = ({ siteTitle }) => {
  const lang = getLang();
  const { header } = getData();
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
          <Link to={window.location.pathname} className="language-flag-link">
            <UkSVG className="language-flag" />
          </Link>
          <Link
            to={`${window.location.pathname}?lang=fr`}
            className="language-flag-link"
          >
            <FranceSVG className="language-flag" />
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
