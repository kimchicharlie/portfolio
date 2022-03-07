import styled from 'styled-components';

export const StyledHistoricalList = styled.div`
  margin-top: 12px;
  padding-left: 8px;
`;

export const StyledHistoricalListItem = styled.div`
  :not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const StyledHistoricalListItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const StyledHistoricalListItemInfoPrimary = styled.span`
  font-weight: bold;
  color: var(--primary);
  margin-right: 8px;
`;

export const StyledHistoricalListItemInfoSecondary = styled.span`
  font-weight: bold;
`;

export const StyledHistoricalListItemInfoOptional = styled.span`
  font-size: 12px;
  line-height: 16px;
  opacity: 0.6;
  font-style: italic;
`;

export const StyledHistoricalListItemDescription = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 24px;
`;

export const StyledHistoricalListItemDescriptionItem = styled.span`
  margin-bottom: 4px;
`;

export const StyledHistoricalListItemServices = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;

export const StyledHistoricalListItemServicesTitle = styled.span`
  font-weight: bold;
`;

export const StyledHistoricalListItemServicesLink = styled.a`
  text-decoration: none;
  color: inherit;

  :hover {
    opacity: 0.5;
  }
`;
