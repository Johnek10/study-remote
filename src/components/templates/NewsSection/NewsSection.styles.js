import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 50px;
  overflow-y: scroll;
  height: 100%;
`;

export const TitleWrapper=styled.h3`
 font-weight: bold;
`;
export const DateWrapper=styled.div`
  width: 50px;
  height: 30px;
  
`;
export const ContentWrapper=styled.div`
display: flex;
img{
  margin-left: 20px;;
  max-width: 150px;
  object-fit: cover;
}`
export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }
`;

