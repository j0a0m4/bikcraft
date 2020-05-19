import React from "react";

export default function ArticleText({ id, title, children }) {
  return (
    <>
      <article className="ArticleText">
        <h2>{title}</h2>
        {children}
      </article>
      <style jsx scoped>{`
        .ArticleText {
          display: grid;
          grid-template-rows: 1fr 3fr;
          row-gap: 20px;
          line-height: 24px;
          grid-area: ${id};
        }
      `}</style>
    </>
  );
}
