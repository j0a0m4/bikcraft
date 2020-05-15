import React from "react";

export default function SlideshowGrid({ title, action, images }) {
  return (
    <section className="SlideshowGrid">
      <h2>{title}</h2>
      <ImgGrid images={images} />
      <section className="button-area">
        <p>conheça nosso portfolio</p>
        <button>{action}</button>
      </section>
      <style jsx scoped>{`
        .SlideshowGrid {
          padding: 50px;
          background-color: black;
          display: grid;
          justify-items: center;
          align-items: center;
          grid-row-gap: 50px;
          grid-template-areas:
            ". title ."
            "slideshow slideshow slideshow "
            ". button .";
        }
        .SlideshowGrid button {
          margin-top: 20px;
          border: 2px solid white;
          color: white;
        }
        .SlideshowGrid button:hover {
          color: var(--yellow);
          border: 2px solid var(--yellow);
          transition: 0.3s;
        }
        .SlideshowGrid h2 {
          color: white;
          font-size: 2rem;
          font-weight: 500;
          grid-area: title;
        }
        .SlideshowGrid .button-area {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          grid-area: button;
        }
        @media (max-width: 414px) {
          .SlideshowGrid {
            grid-template-areas:
              "title"
              "slideshow"
              "button";
          }
        }
      `}</style>
    </section>
  );
}

function ImgGrid({ images }) {
  return (
    <section className="ImgGrid">
      {images.map((img, i) => (
        <img
          key={i}
          className={`bike${i}`}
          src={`/assets/fotos/${img}.jpg`}
          alt={`Bicicleta ${img}`}
        />
      ))}
      <style jsx scoped>{`
        .ImgGrid {
          grid-area: slideshow;
          padding: 50px;
          display: grid;
          grid-column-gap: 30px;
          grid-row-gap: 50px;
          grid-template-areas:
            "bike0 bike1"
            "bike2 bike2";
        }
        .ImgGrid img {
          width: 100%;
          max-height: auto;
        }
        .ImgGrid .bike0 {
          grid-area: bike0;
        }
        .ImgGrid .bike1 {
          grid-area: bike1;
        }
        .ImgGrid .bike2 {
          grid-area: bike2;
        }
        @media (max-width: 414px) {
          .ImgGrid {
            padding: 0;
            grid-template-areas:
              "bike0"
              "bike1"
              "bike2";
          }
        }
      `}</style>
    </section>
  );
}
