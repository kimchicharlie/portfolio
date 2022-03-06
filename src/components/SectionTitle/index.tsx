import React from 'react';

import './style.css';

const SectionTitle = ({
  iconComponent: IconComponent,
  title,
  dark = false,
}: {
  iconComponent: React.ElementType;
  title: string;
  dark?: boolean;
}) => {
  return (
    <div className={`section-title${dark ? '-dark' : ''}`}>
      <div className="section-title-logo">
        <IconComponent />
      </div>
      <span className="section-title-text">{title}</span>
    </div>
  );
};

export default SectionTitle;
