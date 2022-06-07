import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import {
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />;
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data.text) {
    return <p>No quote found!</p>;
  }
  return (
    <div>
      <HighlightedQuote text={data.text} author={data.author} />

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
