import styled from 'styled-components';

const getSizesFromIconSize = (iconSize: 'small' | 'medium' | 'big'): string => {
  if (iconSize === 'medium') {
    return `
            width: 24px;
            height: 24px;
        `;
  }
  if (iconSize === 'big') {
    return `
            width: 32px;
            height: 32px;
        `;
  }
  return `
        width: 16px;
        height: 16px;
    `;
};

export const StyledTextIcon = styled.div<{ vertical?: boolean }>`
  display: flex;
  align-items: center;
  color: var(--light);

  ${props => props.vertical && `flex-direction: column;`}
`;

export const StyledTextIconSvg = styled.div<{
  iconSize?: 'small' | 'medium' | 'big';
  vertical?: boolean;
}>`
  width: 16px;
  height: 16px;

  ${props => props.iconSize && getSizesFromIconSize(props.iconSize)}

  ${props => !props.vertical && `margin-right: 8px;`}
`;

export const StyledTextIconLink = styled.a`
  font-size: 14px;
  color: var(--light);
  text-decoration: none;

  :hover {
    opacity: 0.5;
  }
`;

export const StyledTextIconText = styled.span`
  font-size: 14px;
`;
