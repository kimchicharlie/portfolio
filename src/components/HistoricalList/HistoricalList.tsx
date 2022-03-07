import React from 'react';

import { DataItems } from '../../content/data';
import {
  StyledHistoricalList,
  StyledHistoricalListItem,
  StyledHistoricalListItemInfoContainer,
  StyledHistoricalListItemDescription,
  StyledHistoricalListItemDescriptionItem,
  StyledHistoricalListItemServices,
  StyledHistoricalListItemServicesTitle,
  StyledHistoricalListItemServicesLink,
  StyledHistoricalListItemInfoOptional,
  StyledHistoricalListItemInfoPrimary,
  StyledHistoricalListItemInfoSecondary,
} from './HistoricalList.styled';

export const HistoricalList = ({ items }: { items: DataItems }) => {
  return (
    <StyledHistoricalList>
      {items.map(item => (
        <StyledHistoricalListItem key={`${item.primary}-${item.secondary}`}>
          <StyledHistoricalListItemInfoContainer>
            <div>
              <StyledHistoricalListItemInfoPrimary>
                {item.primary}
              </StyledHistoricalListItemInfoPrimary>
              <StyledHistoricalListItemInfoSecondary>
                {item.secondary}
              </StyledHistoricalListItemInfoSecondary>
            </div>
            {item.optional && (
              <StyledHistoricalListItemInfoOptional>
                {item.optional}
              </StyledHistoricalListItemInfoOptional>
            )}
          </StyledHistoricalListItemInfoContainer>
          {item.description && (
            <StyledHistoricalListItemDescription>
              {item.description.map(description => (
                <StyledHistoricalListItemDescriptionItem key={description}>
                  {description}
                </StyledHistoricalListItemDescriptionItem>
              ))}
            </StyledHistoricalListItemDescription>
          )}
          {item.services && (
            <StyledHistoricalListItemServices>
              <StyledHistoricalListItemServicesTitle>
                Services:{' '}
              </StyledHistoricalListItemServicesTitle>
              {item?.services.map(({ name, url }, index) => {
                const isLastProduct = item?.services?.length === index + 1;
                return url ? (
                  <span>
                    <StyledHistoricalListItemServicesLink
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </StyledHistoricalListItemServicesLink>
                    {isLastProduct ? '' : ', '}
                  </span>
                ) : (
                  <span key={name}>{`${name}${
                    isLastProduct ? '' : ', '
                  }`}</span>
                );
              })}
            </StyledHistoricalListItemServices>
          )}
        </StyledHistoricalListItem>
      ))}
    </StyledHistoricalList>
  );
};
