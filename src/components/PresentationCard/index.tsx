import React from 'react';

import './style.css';

const PresentationCard = ({
  name,
  title,
  className,
}: {
  name: string;
  title: string;
  className?: string;
}) => (
  <div className={`presentation-card${className ? ` ${className}` : ''}`}>
    <h1 className="presentation-card-name">{name}</h1>
    <span className="presentation-card-title">{title}</span>
  </div>
);

export default PresentationCard;
