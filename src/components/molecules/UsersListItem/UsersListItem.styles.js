import styled from 'styled-components/macro';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  background-color: azure;
  /*
 // background: ${({ theme, value }) => {
    // if (value > 4) return theme.colors.success;
    //if (value > 3) return theme.colors.warning;
    //if (value > 2) return theme.colors.error;
    //  return theme.colors.grey;
  }};
  */
`;

export const StyledInfo = styled.div`
  width: 100%;
  padding: 25px 20px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
