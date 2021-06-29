import UsersList from 'components/organims/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
//import Dupa from '../components/organims/dupa/dupa';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);
export default Root;

// <GlobalStyle>
//   <Wrapper>
//<UsersList />
//</Dupa>
//   </Wrapper>
// </GlobalStyle>
