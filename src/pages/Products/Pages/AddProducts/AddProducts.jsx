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
} from './_AddProducts';

const AddProducts = () => {
  const history = useHistory();

  function handleBack() {
    history.push('/produtos');
  }

  return (
    <WrapperPage title="Adicionar novo produto">
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
          <button className="add-button">Adicionar</button>
          <button className="cancel-button">Cancelar</button>
        </ContainerButtons>
      </Container>
    </WrapperPage>
  );
};

export default AddProducts;
