import React from "react";
import ProductDesc from "./ProductDesc";

export default function ProductGrid({ title, text, desc }) {
  return (
    <>
      <article className="ProductGrid">
        <h2>{title}</h2>
        <ProductImage title={`${title}-1`} area="title" />
        <image>
          <img
            src={`/assets/icones/${title}.svg`}
            alt={`Icone de bike ${title}`}
          />
        </image>
        <ProductImage title={`${title}-2`} area="sub" />
        <ProductDesc text={text} desc={desc} />
      </article>
      <style jsx scoped>{`
        .ProductGrid {
          padding: 100px;
          display: grid;
          row-gap: 30px;
          column-gap: 50px;
          justify-items: center;
          align-items: center;
          grid-template-columns: 1.5fr 0.5fr 1fr;
          grid-template-areas:
            "title title icon"
            "sub desc desc";
        }
        .ProductGrid h2 {
          font-size: 2rem;
          font-weight: bold;
          z-index: 1;
          color: white;
          grid-area: title;
        }
        .ProductGrid image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: black;
        }
      `}</style>
    </>
  );
}

function ProductImage({ title, area }) {
  return (
    <>
      <img
        className={`img-${area}`}
        src={`/assets/produtos/${title}.jpg`}
        alt={`Bike ${title} `}
      />
      <style jsx scoped>{`
        .img-${area} {
          width: 100%;
          grid-area: ${area};
        }
      `}</style>
    </>
  );
}
