import React from "react";

export default function Layout({ children }) {
  return (
    <main>
      {children}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

        :root {
          --yellow: #fec63e;
        }

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
         {
          /* My Global CSS */
        }
        body {
          font-size: 18px;
          font-family: "Roboto", sans-serif;
        }
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        h1,
        h2,
        h3 {
          text-transform: uppercase;
        }
        button {
          background: none;
          padding: 10px 20px 10px 20px;
          border: 2px solid black;
          text-transform: uppercase;
          transition: 0.5s;
        }
        button:hover {
          color: var(--yellow);
          border: 2px solid var(--yellow);
          transition: 0.3s;
        }
      `}</style>
    </main>
  );
}
