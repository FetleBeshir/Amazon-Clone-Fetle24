import React from "react";
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard data={infos} key={index} />
      ))}
    </section>
  );
}

export default Category;
