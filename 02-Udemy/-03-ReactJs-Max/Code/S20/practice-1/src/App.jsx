import QuoteDetails from "./Pages/QuoteDetails";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AllQuotes from "./Pages/AllQuotes";
import AddQuote from "./Pages/AddQuote";
import { Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { NotFound } from "./Pages/NotFound";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>

        <Route path="/new-quote">
          <AddQuote />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;
