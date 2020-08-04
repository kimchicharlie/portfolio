import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const PresentationCard = ({ name, title, className }) => (
  <div className={`presentation-card${className ? ` ${className}` : ''}`}>
    <h1 className="presentation-card-name">{name}</h1>
    <span className="presentation-card-title">{title}</span>
  </div>
);

PresentationCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PresentationCard.defaultProps = {};

export default PresentationCard;
