import React from "react";
import Quote from "./Quote";

export default function Hero({ children, image, title, action, margin }) {
  return (
    <section className="Hero">
      {title && <h2>{title}</h2>}
      {children}
      {action && <button>{action}</button>}
      <style jsx scoped>{`
        .Hero {
          padding: 20px;
          display: grid;
          justify-items: center;
          align-items: center;
          background-color: black;
          background-image: url("/assets/fotos/${image}.jpg");
          background-position: center;
          height: 380px;
          ${margin && "margin-bottom: 100px;"}
        }

        .Hero h2 {
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
        
        @media (max-width: 414px) {   
          .Hero {
            padding: 30px;
            padding-top: 50px;
          }
          .Hero h2 {
            color: white;
            max-width: 12ch;
            text-align: center;
            font-weight: bold;
            line-height: 50px;
          }
        }
      `}</style>
    </section>
  );
}
