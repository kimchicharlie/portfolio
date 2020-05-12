import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ inverted, ...rest }) => (
  <button
    className={`super-button${inverted ? ' super-button-inverted' : ''}`}
    {...rest}
  />
);

Button.propTypes = {
  inverted: PropTypes.bool,
};

Button.defaultProps = {
  inverted: false,
};

export default Button;
