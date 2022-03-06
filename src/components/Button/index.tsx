import React from 'react';

import './style.css';

const Button = ({ inverted = false, ...rest }: { inverted?: boolean }) => (
  <button
    className={`super-button${inverted ? ' super-button-inverted' : ''}`}
    {...rest}
  />
);

export default Button;
