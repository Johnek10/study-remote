import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  //overflow: hidden;
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 2px solid #ffa51f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
  
  ${ViewWrapper} {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const NewsSectionHeader = styled.h3`
  // margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  padding: 10px;
  width: 100%;
  height: 200px;
  max-width: unset;
`;
