import React from "react";
export function ProductImage({ title, area }) {
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
