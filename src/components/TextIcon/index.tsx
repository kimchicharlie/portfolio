import React from 'react';

import './style.css';

const TextIcon = ({
  text,
  iconComponent: IconComponent,
  href,
  vertical = false,
  iconSize = 'small',
  className,
}: {
  text: string;
  iconComponent: React.ElementType;
  href?: string;
  vertical?: boolean;
  iconSize?: 'small' | 'medium' | 'big';
  className?: string;
}) => (
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

export default TextIcon;
