import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin: 25px;
`;
