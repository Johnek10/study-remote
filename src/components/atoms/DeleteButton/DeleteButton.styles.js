import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.secondary ? '#ff5c93' : '#ff9e39')};
  border-radius: ${({ borderRadius }) => borderRadius || '50px'};
  border: none;

  svg {
    width: 100%;
    height: 100%;
    // stroke: chartreuse;
  }
`;
