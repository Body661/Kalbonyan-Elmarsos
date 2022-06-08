import React, { useEffect } from "react";

import {
  Link,
  useParams,
  useLocation,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const match = useLocation();
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
      <Outlet />
    </div>
  );
};

export default QuoteDetails;
