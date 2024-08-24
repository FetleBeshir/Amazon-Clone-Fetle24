import React from "react";
import Header from "../Header/Header";
import classes from "../Header/Header.module.css";

function LayOut({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default LayOut;
