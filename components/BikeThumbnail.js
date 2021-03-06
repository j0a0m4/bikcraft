import React from "react";

export default function BikeThumbnail({ type, desc }) {
  return (
    <article className="BikeThumbnail">
      <header>
        <img src={`/assets/icones/${type}.svg`} alt={`Bike ${type}`} />
      </header>
      <section className="content">
        <h3>{type}</h3>
        <hr />
        <p>{desc}</p>
      </section>
      <style jsx scoped>{`
        .BikeThumbnail {
          margin: 5px;
          background-color: black;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-area: ${type};
        }

        .BikeThumbnail .content {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--yellow);
        }

        .BikeThumbnail h3 {
          font-weight: 500;
        }

        .BikeThumbnail .content p {
          font-family: Georgia;
          font-size: 1rem;
          min-height: 80px;
          max-width: 25ch;
        }

        .BikeThumbnail header {
          display: flex;
          justify-items: center;
          align-items: center;
          min-height: 200px;
        }
      `}</style>
    </article>
  );
}
