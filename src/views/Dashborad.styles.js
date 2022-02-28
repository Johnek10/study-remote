import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 2rem 3.5rem;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  nav a {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightOrange};
    text-decoration: none;
    font-weight: 600;
    width: 2.2em;
    height: 2.2em;
    margin-left: 20px;
    display: inline-block;
    padding: 6px;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  nav a:hover {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;

export const StudentsWrapper = styled(ViewWrapper)`
  margin: 25px 0;
`;
