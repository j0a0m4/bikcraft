import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <section className="ContentRow">
        <Content title="Nossa História" id="historia">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere!
            Repudiandae mollitia atque fugiat consequatur maiores doloribus
            assumenda minima dolorum enim amet earum doloremque perspiciatis,
            ducimus quis, alias provident voluptate?
          </p>
        </Content>
        <Content title="contato" id="contato">
          <ul>
            <li>(21)99999-9999</li>
            <li>contato@bikcraft.com</li>
            <li>Botafogo - RJ</li>
          </ul>
        </Content>
        <Content title="redes sociais" id="redes">
          {["facebook", "instagram", "twitter"].map((name) => (
            <SocialIcon name={name} />
          ))}
        </Content>
      </section>
      <section className="copyright">
        <p>Bikcraft 2020 - Alguns direitos reservados.</p>
      </section>
      <style jsx scoped>{`
        .Footer {
          background-color: black;
          min-height: 100px;
        }
        .ContentRow {
          padding-top: 40px;
          min-height: 200px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          column-gap: 20px;
          padding-left: 20px;
        }
        .copyright {
          display: grid;
          align-items: center;
          padding-left: 30px;
          background-color: var(--yellow);
          height: 90px;
        }
      `}</style>
    </footer>
  );
}

function Content({ title, children, id }) {
  return (
    <article className="Content" id={id}>
      <h3>{title}</h3>
      <section>{children}</section>
      <style jsx scoped>{`
        .Content {
          padding: 10px;
          color: white;
          max-width: 37ch;
        }
        .Content h3 {
          color: var(--yellow);
          margin-bottom: 15px;
        }
        .Content section {
          line-height: 1.5rem;
          font-size: 1rem;
        }
      `}</style>
    </article>
  );
}

function SocialIcon({ name }) {
  return (
    <>
      <img src={`/assets/sociais/${name}.svg`} alt={`${name} icon`} />
      <style jsx scoped>{`
        img {
          padding: 10px;
        }
        img:first-of-type {
          padding-left: 0;
        }
      `}</style>
    </>
  );
}
