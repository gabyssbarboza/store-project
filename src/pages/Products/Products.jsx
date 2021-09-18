import { WrapperPage } from '../../shared/components/WrapperPages/WrapperPages';
import { ProductsList } from './components/ProductsList/ProductsList';

export const Products = () => {
  return (
    <WrapperPage title="Produtos">
      <ProductsList />
    </WrapperPage>
  );
};
