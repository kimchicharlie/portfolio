import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const HistoricalList = props => {
  const { items } = props;
  return (
    <div className="historical-list">
      {items.map(item => (
        <div
          key={`${item.primary}-${item.secondary}`}
          className="historical-list-item"
        >
          <div className="historical-list-item-info">
            <div>
              <span className="historical-list-item-info-primary">
                {item.primary}
              </span>
              <span className="historical-list-item-info-secondary">
                {item.secondary}
              </span>
            </div>
            {item.optional && (
              <div>
                <span className="historical-list-item-info-optional ">
                  {item.optional}
                </span>
              </div>
            )}
          </div>
          <div className="historical-list-item-description">
            {item.description.map(description => (
              <span key={description}>{description}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

HistoricalList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
      optional: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

export default HistoricalList;
