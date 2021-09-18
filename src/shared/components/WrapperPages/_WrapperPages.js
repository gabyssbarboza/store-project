import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const Column = styled.div`
  width: 100%;

  @media (max-width: 1024px) {
    > div {
      padding-bottom: 100px;
    }
  }
`;
