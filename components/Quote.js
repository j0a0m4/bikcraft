import React from "react";

export default function Quote({ phrase, author }) {
  return (
    <blockquote className="Quote">
      <hr />
      <p>"{phrase}"</p>
      <hr />
      <footer>{author}</footer>
      <style jsx scoped>{`
        .Quote {
          display: grid;
          justify-items: center;
          align-items: center;
          color: white;
        }

        .Quote p {
          text-align: center;
          font-family: "Georgia";
          max-width: 40ch;
        }

        .Quote footer {
          font-weight: 500;
          text-transform: uppercase;
        }
      `}</style>
    </blockquote>
  );
}
