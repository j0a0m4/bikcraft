import React from "react";
import Quote from "./Quote";

export default function Hero() {
  return (
    <section className="Hero">
      <h1>Bicicletas Feitas a Mão</h1>
      <Quote
        phrase="Não tenha nada em sua casa que você
não considere útil ou acredita ser bonito!"
        author="William Morris"
      />
      <button>Orçamento</button>
      <style jsx scoped>{`
        .Hero {
          display: grid;
          justify-items: center;
          align-items: center;
          background-image: url("/assets/fotos/mesa-trabalho.jpg");
          height: 380px;
          margin-bottom: 100px;
        }

        h1 {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          text-shadow: 1px 1px black;
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
