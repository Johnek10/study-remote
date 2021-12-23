import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 2px solid #ffa51f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;
