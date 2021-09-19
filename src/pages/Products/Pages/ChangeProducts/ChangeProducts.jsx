import { useHistory } from 'react-router';
import { WrapperPage } from '../../../../shared/components/WrapperPages/WrapperPages';
import {
  BackButton,
  Container,
  DescriptionInput,
  NameInput,
  PriceInput,
  QtdInput,
  ContainerButtons,
  ReviewInput,
} from './_ChangeProducts';

const ChangeProducts = () => {
  const history = useHistory();

  function handleBack() {
    history.push('/');
  }

  return (
    <WrapperPage title="Alterar produto">
      <h1>
        <BackButton onClick={() => handleBack()} />
        Voltar
      </h1>
      <Container>
        <div>
          <label>Nome do produto:</label>
          <NameInput />
        </div>

        <div className="duo-container">
          <div>
            <label>Preço:</label>
            <PriceInput />
          </div>

          <div>
            <label>Quantidade:</label>
            <QtdInput />
          </div>
        </div>

        <div>
          <label>Descrição:</label>
          <DescriptionInput />
        </div>

        <div>
          <label>Avaliação:</label>
          <ReviewInput />
        </div>

        <ContainerButtons>
          <button className="add-button">Alterar</button>
          <button className="cancel-button">Cancelar</button>
        </ContainerButtons>
      </Container>
    </WrapperPage>
  );
};

export default ChangeProducts;
