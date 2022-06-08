import React, { Suspense } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import AllQuotes from "./Pages/AllQuotes";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(() => import("./Pages/AddQuote"));
const QuoteDetails = React.lazy(() => import("./Pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
