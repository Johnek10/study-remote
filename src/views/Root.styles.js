import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background-color: ${(props) => console.log(props.theme)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
