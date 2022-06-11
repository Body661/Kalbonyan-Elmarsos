import React from "react";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();

  return <h1>{router.query.newsId}</h1>;
};

export default Details;
