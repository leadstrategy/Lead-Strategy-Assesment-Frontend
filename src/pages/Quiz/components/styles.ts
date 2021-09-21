import styled from 'styled-components';

export const AnswerWrapper = styled.p`
  &.active {
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.background.main};
  }
`;
