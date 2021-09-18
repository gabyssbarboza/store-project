import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Container = styled.div`
  div {
    label {
      display: block;
    }
  }

  .duo-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  input,
  textarea {
    resize: none;
    width: 100%;
    min-height: 35px;
    color: var(--blue);
    border: unset;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--gray);
      font-family: 'Roboto';
    }
  }
`;
export const NameInput = styled.input``;
export const PriceInput = styled.input``;
export const QtdInput = styled.input``;
export const DescriptionInput = styled.textarea``;
export const ReviewInput = styled.input``;

export const BackButton = styled(AiOutlineArrowLeft)``;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  button {
    border: none;
    font-size: 18px;
    padding: 2rem;
    border-radius: 20px;
  }

  .add-button {
    background: #b9efa2;
  }

  .cancel-button {
    background: #ff0125;
  }
`;
