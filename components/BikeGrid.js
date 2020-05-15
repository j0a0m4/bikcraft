import React from "react";
import bikes from "../utils/bike";
import BikeThumbnail from "./BikeThumbnail";

export default function BikeGrid() {
  return (
    <section className="BikeGrid">
      <h2>Produtos</h2>
      {bikes.map((b) => (
        <BikeThumbnail key={b.type} {...b} />
      ))}
      <button>Produtos</button>
      <style jsx scoped>{`
        .BikeGrid {
          margin-bottom: 100px;
          display: grid;
          align-items: center;
          justify-items: center;
          grid-row-gap: 30px;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          grid-template-areas:
            ". subtitle ."
            "passeio esporte retro"
            ". button .";
        }
        .BikeGrid button {
          grid-area: button;
        }
        .BikeGrid h2 {
          grid-area: subtitle;
        }
        @media (min-width: 1025px) {
          .BikeGrid {
            margin-left: 200px;
            margin-right: 200px;
          }
        }
        @media (max-width: 414px) {
          .BikeGrid {
            grid-template-areas:
              "subtitle"
              "passeio"
              "esporte"
              "retro"
              "button";
          }
        }
      `}</style>
    </section>
  );
}
