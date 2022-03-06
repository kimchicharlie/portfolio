import styled from 'styled-components';

export const StyledButton = styled.button<{ inverted?: boolean }>`
  outline: none;
  background-color: var(--light);
  color: var(--primary);
  border: 1px var(--primary) solid;
  width: 240px;
  height: 48px;
  border-radius: 4px;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }

  ${props =>
    props.inverted &&
    `
        background-color: var(--primary);
        color: var(--light);
        border: 1px var(--light) solid;

        :hover {
            opacity: 0.8;
            cursor: pointer;
        }
    `}
`;
