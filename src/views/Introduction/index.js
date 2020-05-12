import React from 'react';
import { Link } from 'gatsby';

import './style.css';

const Introduction = () => {
  return (
    <div className="introdution-container">
      <div className="introdution-big-text">
        <p>I'm Charlie Henin,</p>
        <p className="introdution-secondary">Full-stack developer</p>
        <Link className="introdution-link" to="/resume">
          Check out my resume
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
