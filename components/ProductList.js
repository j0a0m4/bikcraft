import React from "react";
import Product from "./Product";

export default function ProductList({
  products = ["esporte", "passeio", "retro"],
}) {
  return (
    <>
      <ul className="ProductList">
        {products.map((product, i) => (
          <Product key={i} name={product} />
        ))}
      </ul>
      <style jsx scoped>{`
        .ProductList {
          padding: 50px;
        }
      `}</style>
    </>
  );
}
