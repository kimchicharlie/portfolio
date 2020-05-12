import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.css';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-content">
      <Link to="/" className="header-link">
        Homepage
      </Link>
      <Link to="/resume" className="header-link">
        Resume
      </Link>
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
