import React, { useEffect, useState } from "react";
import axios from "axios";
import AmProductCard from "./AmProductCard";
import classes from "./AmProduct.module.css";
import Loader from "../Loader/Loader";

function AmProduct() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, []);
console.log(products);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => (
            <AmProductCard renderAdd={true}product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default AmProduct;
