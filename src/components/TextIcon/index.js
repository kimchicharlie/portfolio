import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TextIcon = props => {
  const {
    text,
    iconComponent: IconComponent,
    href,
    vertical,
    iconSize,
    className,
  } = props;
  return (
    <div
      className={`${vertical ? 'text-icon-vertical' : 'text-icon-horizontal'}${
        className ? ` ${className}` : ''
      }`}
    >
      <IconComponent
        className={`text-icon-svg-${iconSize}${
          vertical ? '' : ' text-icon-svg-margin'
        }`}
      />
      {href ? (
        <a
          className="text-icon-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <span className="text-icon-text">{text}</span>
      )}
    </div>
  );
};

TextIcon.propTypes = {
  iconComponent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  vertical: PropTypes.bool,
  iconSize: PropTypes.oneOf(['small', 'medium', 'big']),
};

TextIcon.defaultProps = {
  href: null,
  vertical: false,
  iconSize: 'small',
};

export default TextIcon;
