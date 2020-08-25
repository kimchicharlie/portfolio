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
              <div className="historical-list-item-info-optional">
                {item.optional}
              </div>
            )}
          </div>
          {item.description && (
            <div className="historical-list-item-description">
              {item.description.map(description => (
                <span
                  className="historical-list-item-description-item"
                  key={description}
                >
                  {description}
                </span>
              ))}
            </div>
          )}
          {item.services && (
            <div className="historical-list-item-services">
              <span className="historical-list-item-services-title">
                Services:{' '}
              </span>
              {item.services.map(({ name, url }, index) => {
                const isLastProduct = item.services.length === index + 1;
                return url ? (
                  <span>
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="historical-list-item-services-link"
                    >
                      {name}
                    </a>
                    {isLastProduct ? '' : ', '}
                  </span>
                ) : (
                  <span key={name}>{`${name}${
                    isLastProduct ? '' : ', '
                  }`}</span>
                );
              })}
            </div>
          )}
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
      description: PropTypes.arrayOf(PropTypes.string),
      services: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string,
        })
      ),
    })
  ),
};

export default HistoricalList;
