import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 20px 40px;
  margin: 0 auto;
  
  @media (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 560px) {
    padding: 20px 20px;
  }
`;
