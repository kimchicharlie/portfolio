import React from 'react';
import { Link } from 'gatsby';

import './style.css';

const Introduction = () => {
  return (
    <div className="container">
      <div className="big-text">
        <p>I'm Charlie Henin,</p>
        <p className="secondary">Full-stack developer</p>
        <Link className="homepage-link" to="/resume">
          Check out my resume
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
