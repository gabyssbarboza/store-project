import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddProducts from '../pages/Products/Pages/AddProducts/AddProducts';
import ChangeProducts from '../pages/Products/Pages/ChangeProducts/ChangeProducts';
import { Products } from '../pages/Products/Products';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Products} path="/produtos" exact />
        <Route component={AddProducts} path="/adcionar-novo-produto" exact />
        <Route component={ChangeProducts} path="/alterar-produto" exact />
      </Switch>
    </BrowserRouter>
  );
};
