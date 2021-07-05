import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  border: 4px solid bisque;
  background-color: ${(props) => {
    if (parseInt(props.data) < 3) {
      console.log('dupa');
      return 'red';
    } else {
      return 'yellow';
    }
  }};
  font-size: 0.8rem;
`;
