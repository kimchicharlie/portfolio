import React from 'react';
import { Link } from 'gatsby';

import './style.css';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-big-text">
        <p>I'm Charlie Henin,</p>
        <p className="introduction-secondary">Full Stack developer</p>
        <Link className="introduction-link" to="/resume">
          Check out my resume
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
