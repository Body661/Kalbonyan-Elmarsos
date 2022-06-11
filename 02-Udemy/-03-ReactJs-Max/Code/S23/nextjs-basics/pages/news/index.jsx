import React, { Fragment } from "react";
import Link from "next/link";
const news = () => {
  return (
    <Fragment>
      <h1>news page</h1>
      <ul>
        <li>
          <Link href="/news/meaw"> meaw</Link>
        </li>
        <li>
          <Link href="/news/woow">wooow</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default news;
