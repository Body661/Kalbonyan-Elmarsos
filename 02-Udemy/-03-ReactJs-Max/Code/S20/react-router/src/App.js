import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import { Fragment } from 'react';
import MainHeader from './Components/MainHeader';
import DetailsPage from './Pages/DetailsPage';

function App() {
  return (
    <Fragment>
      <header>
        <MainHeader />
      </header>

      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>

          <Route path='/products' exact>
            <Products />
          </Route>

          <Route path='/products/:productId'>
            <DetailsPage />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
