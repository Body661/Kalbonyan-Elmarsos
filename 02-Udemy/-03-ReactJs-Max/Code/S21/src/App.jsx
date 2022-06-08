import { Link, Navigate, Route, Routes } from "react-router-dom";

import QuoteDetails from "./Pages/QuoteDetails";
import AllQuotes from "./Pages/AllQuotes";
import AddQuote from "./Pages/AddQuote";
import Layout from "./components/layout/Layout";
import { NotFound } from "./Pages/NotFound";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" replace element={<Navigate to="/quotes" />} />
        <Route path="quotes" element={<AllQuotes />} />
        <Route path="quotes/:quoteId" element={<QuoteDetails />}>
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Show Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="new-quote" element={<AddQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
