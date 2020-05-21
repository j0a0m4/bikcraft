import React from "react";
import { ProductImage } from "./ProductImage";

export default function Product({ name }) {
  return (
    <a href={`/produtos/${name}`}>
      <li>
        <h2>{name}</h2>
        <ProductImage title={`${name}-1`} area="title" />
        <image>
          <img
            src={`/assets/icones/${name}.svg`}
            alt={`Icone de bike ${name}`}
          />
        </image>
      </li>
      <style jsx scoped>{`
        li {
          margin-bottom: 50px;
          display: grid;
          column-gap: 15px;
          justify-items: center;
          align-items: center;
          grid-template-columns: repeat(3, 1fr);
          grid-template-areas: "title title icon";
        }
        h2 {
          font-size: 2rem;
          font-weight: bold;
          z-index: 1;
          color: white;
          grid-area: title;
        }
        image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: black;
        }
      `}</style>
    </a>
  );
}
