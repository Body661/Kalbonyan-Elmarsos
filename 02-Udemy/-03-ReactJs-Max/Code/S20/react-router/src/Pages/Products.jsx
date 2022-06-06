import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <u l>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/computer">Computer</Link>
        </li>
        <li>
          <Link to="/products/laptop">Laptop</Link>
        </li>
        <li>
          <Link to="/products/mobile">Mobile</Link>
        </li>
      </u>
    </section>
  );
};

export default Products;
