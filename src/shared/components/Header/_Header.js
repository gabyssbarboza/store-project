import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Background = styled.header`
  width: 100%;
  height: 100px;

  background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
`;

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(239, 239, 244, 0.16);
  border-top-left-radius: 40px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1024px) {
    border-top-left-radius: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: var(--greenText);
  padding-top: 10px;
`;

export const MenuIcon = styled.img`
  width: 27px;
  height: 20px;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ExitButton = styled.div`
  > span {
    color: #e5e5ea;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const BackButton = styled(AiOutlineArrowLeft)``;
