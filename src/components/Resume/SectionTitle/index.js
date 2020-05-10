import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SectionTitle = props => {
  const { iconComponent: IconComponent, title } = props;
  return (
    <div className="section-title">
      <div className="section-title-logo">
        <IconComponent />
      </div>
      <span className="section-title-text">{title}</span>
    </div>
  );
};

SectionTitle.propTypes = {
  iconComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
