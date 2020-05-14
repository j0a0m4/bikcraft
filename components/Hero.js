import React from "react";
import Quote from "./Quote";

export default function Hero({ children, image, title, action, margin }) {
  return (
    <section className="Hero">
      {title && <h1>{title}</h1>}
      {children}
      {action && <button>{action}</button>}
      <style jsx scoped>{`
        .Hero {
          display: grid;
          justify-items: center;
          align-items: center;
          background-color: black;
          background-image: url("/assets/fotos/${image}.jpg");
          background-position: center;
          height: 380px;
          ${margin && "margin-bottom: 100px;"}
        }

        .Hero h1 {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
        }

        button {
          background: none;
          font-weight: bold;
          border: 2px solid white;
          color: white;
          transition: 0.5s;
        }

        button:hover {
          color: var(--yellow);
          border: 2px solid var(--yellow);
          transition: 0.3s;
        }
      `}</style>
    </section>
  );
}
