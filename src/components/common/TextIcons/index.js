import React from 'react';
import PropTypes from 'prop-types';

import TextIcon from '@components/common/TextIcon';

import './style.css';

const TextIcons = props => {
  const { items } = props;
  return (
    <div className="text-icons">
      {items.map(textIconProps => (
        <TextIcon {...textIconProps} />
      ))}
    </div>
  );
};

TextIcons.propTypes = {
  items: PropTypes.arrayOf(TextIcon.propTypes).isRequired,
};

export default TextIcons;
