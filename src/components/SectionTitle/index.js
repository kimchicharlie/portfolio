import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SectionTitle = props => {
  const { iconComponent: IconComponent, title, dark } = props;
  return (
    <div className={`section-title${dark ? '-dark' : ''}`}>
      <div className="section-title-logo">
        <IconComponent />
      </div>
      <span className="section-title-text">{title}</span>
    </div>
  );
};

SectionTitle.propTypes = {
  iconComponent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

SectionTitle.defaultProps = {
  dark: false,
};

export default SectionTitle;
