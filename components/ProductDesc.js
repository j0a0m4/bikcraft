import React from "react";

export default function ProductDesc({
  text = "Muito melhor do que passear pela orla a vidros fechados. A Bikcraft Passeio é uma bicicleta que une conforto e praticidade para o seu dia a dia. Você nunca mais vai querer saber de outra.",
  attributes = ["conforto", "praticidade", "design", "versatildiade"],
}) {
  return (
    <>
      <article className="ProductDesc">
        <p>{text}</p>
        <ul>
          {attributes.map((a, i) => (
            <li className={`att-${i}`} key={a}>
              {a}
            </li>
          ))}
        </ul>
      </article>
      <style jsx scoped>
        {`
          .ProductDesc {
            width: 100%;
            display: grid;
            background-color: black;
            color: white;
            grid-area: desc;
            grid-template-areas:
              "desc desc"
              "att att"
              "att att";
          }
          .ProductDesc p {
            font-family: "Georgia";
            font-size: 1rem;
            line-height: 24px;
            padding: 30px;
            height: 120px;
            grid-area: desc;
          }
          .ProductDesc ul {
            width: 100%;
            display: grid;
            color: black;
            text-transform: uppercase;
            font-weight: bold;
            grid-area: att;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2px;
            column-gap: 2px;
            grid-template-areas:
              "c1 c2"
              "c3 c4";
          }
          .ProductDesc li {
            padding-top: 20px;
            background-color: var(--yellow);
            text-align: center;
            height: 40px;
            width: 100%;
          }
          .att-0 {
            grid-area: c1;
          }
          .att-1 {
            grid-area: c2;
          }
          .att-2 {
            grid-area: c3;
          }
          .att-3 {
            grid-area: c4;
          }
        `}
      </style>
    </>
  );
}
