import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.css';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="content">
      {/* <Link to="/" className="title">
        {siteTitle}
      </Link> */}
      <div />
      <div>
        <Link to="/" className="link hoverable">
          Homepage
        </Link>
        <Link to="/" className="link hoverable">
          Resume
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
