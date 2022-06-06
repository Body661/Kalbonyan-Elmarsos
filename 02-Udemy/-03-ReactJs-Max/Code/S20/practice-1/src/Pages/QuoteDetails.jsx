import React from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
