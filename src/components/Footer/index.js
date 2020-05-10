import PropTypes from 'prop-types';
import React from 'react';

import LinkedinSVG from '@icons/linkedin.svg';
import GithubSVG from '@icons/github.svg';
import './style.css';

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="content">
      <div>© {new Date().getFullYear()}, Built with ♥️</div>
      <div className="logos-container">
        <a
          className="logo-link"
          href="https://www.linkedin.com/in/charlie-henin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinSVG className="logo" />
        </a>
        <a
          className="logo-link"
          href="https://github.com/kimchicharlie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubSVG className="logo" />
        </a>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

Footer.defaultProps = {};

export default Footer;
