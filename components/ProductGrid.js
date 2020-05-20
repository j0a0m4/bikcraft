import React from "react";

export default function ProductGrid({ title }) {
  return (
    <>
      <article className="ProductGrid">
        <h2>{title}</h2>
        <ProductImage title={`${title}-1`} area="title" />
        <img
          src={`/assets/icones/${title}.svg`}
          alt={`Icone de bike ${title}`}
        />
        <ProductImage title={`${title}-2`} area="sub" />
      </article>
      <style jsx scoped>{`
        .ProductGrid {
          padding: 100px;
          display: grid;
          row-gap: 30px;
          justify-items: center;
          align-items: center;
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
