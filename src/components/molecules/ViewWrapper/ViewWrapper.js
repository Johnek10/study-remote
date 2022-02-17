import styled from 'styled-components';

export const ViewWrapper = styled.div`
  box-sizing: border-box;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.lightGreyTwo};
  width: 100%;
  max-width: 500px;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
