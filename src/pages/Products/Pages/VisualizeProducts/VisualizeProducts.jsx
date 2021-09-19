import { WrapperPage } from '../../../../shared/components/WrapperPages/WrapperPages';
import { useHistory } from 'react-router';
import {
  Container,
  ProdDescription,
  ProdImg,
  ProdTitle,
  BackButton,
} from './_VisualizeProducts';

export const VisualizeProducts = () => {
  const history = useHistory();

  function handleBack() {
    history.push('/');
  }

  return (
    <WrapperPage title="Visualizar Produto">
      <h1>
        <BackButton onClick={() => handleBack()} />
        Voltar
      </h1>
      <Container>
        <div>
          <div>
            <ProdImg src="https://via.placeholder.com/350x550" />
          </div>
          <div>
            <ProdTitle>
              Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste{' '}
              Teste
            </ProdTitle>
          </div>
        </div>

        <ProdDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          obcaecati nulla esse quibusdam praesentium quia voluptates, itaque a
          sequi, aliquid voluptatem blanditiis, error voluptatibus ad cum
          doloremque omnis accusantium? Assumenda.
        </ProdDescription>
      </Container>
    </WrapperPage>
  );
};
