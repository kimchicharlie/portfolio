import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const PresentationCard = ({ name, title, className }) => (
  <div className={`presentation-card${className ? ` ${className}` : ''}`}>
    <span className="presentation-card-name">{name}</span>
    <span className="presentation-card-title">{title}</span>
  </div>
);

PresentationCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PresentationCard.defaultProps = {};

export default PresentationCard;
