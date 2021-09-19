import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddProducts from '../pages/Products/Pages/AddProducts/AddProducts';
import ChangeProducts from '../pages/Products/Pages/ChangeProducts/ChangeProducts';
import { VisualizeProducts } from '../pages/Products/Pages/VisualizeProducts/VisualizeProducts';
import { Products } from '../pages/Products/Products';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Products} path="/" exact />
        <Route component={AddProducts} path="/adcionar-novo-produto" exact />
        <Route component={ChangeProducts} path="/alterar-produto" exact />
        <Route
          component={VisualizeProducts}
          path="/visualizar-produto/:id"
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};
