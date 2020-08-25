import React from 'react';

import LinkedinSVG from '@icons/linkedin.svg';
import GithubSVG from '@icons/github.svg';
import { getData } from '@content/helpers';

import './style.css';

const Footer = () => {
  const { footer } = getData();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          © {new Date().getFullYear()}, {footer.text} & ♥️
        </div>
        <div className="footer-logos-container">
          <a
            className="footer-logo-link"
            href="https://www.linkedin.com/in/charlie-henin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSVG className="footer-logo" />
          </a>
          <a
            className="footer-logo-link"
            href="https://github.com/kimchicharlie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSVG className="footer-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
