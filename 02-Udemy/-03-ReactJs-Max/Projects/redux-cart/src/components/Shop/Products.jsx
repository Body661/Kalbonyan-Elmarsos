import ProductItem from "./ProductItem";
import classes from "./Products.module.css";


const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "The first book I ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "The second book I ever wrote",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
