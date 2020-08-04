import React from 'react';
import { Link } from 'gatsby';

import './style.css';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-big-text">
        <h1 className="introduction-title">I'm Charlie Henin</h1>
        <p className="introduction-secondary">Full Stack developer</p>
        <Link className="introduction-link" to="/resume">
          Check out my resume
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
