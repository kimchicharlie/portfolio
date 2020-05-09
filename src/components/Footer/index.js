import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.css';

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="content">
      <div>© {new Date().getFullYear()}, Built with ♥️</div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
