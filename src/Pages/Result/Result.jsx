import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./result.module.css";

function Result() {
  const { categoryName } = useParams();
  const [filteredProduct, setFilteredProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => setFilteredProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
console.log(filteredProduct)
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {filteredProduct?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Result;