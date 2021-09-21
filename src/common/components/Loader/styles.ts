import styled from 'styled-components';

export const LoadingConatiner = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  place-items: center;
  position: absolute;
  background: ${props => props.theme.palette.background.main};
`;
