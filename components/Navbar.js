import React from "react";

export default function Navbar() {
  return (
    <header className="Navbar">
      <img
        id="logo"
        src="/assets/bikcraft.svg"
        alt="logo escrito o nome da marca 'bikcraft'"
      />
      <nav>
        <ul>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .Navbar {
          display: grid;
          align-items: center;
          grid-template-columns: 1fr 3fr;
          background-color: var(--yellow);
          padding: 10px;
        }
        #logo {
          min-width: 100px;
          min-heigth: 31px;
          padding-left: 50px;
        }

        .Navbar nav ul {
          display: grid;
          align-items: center;
          padding-right: 50px;
          justify-items: center;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }

        .Navbar nav ul li a {
          text-transform: uppercase;
          color: black;
          font-weight: bold;
          text-decoration: none;
          transition: 0.5s;
        }

        .Navbar nav ul li a:hover {
          color: white;
          transition: 0.3s;
        }
        @media (max-width: 414px) {
          .Navbar {
            justify-items: center;
            grid-template-columns: 1fr 1fr;
          }
          #logo {
            padding-left: 0px;
          }
          .Navbar nav ul {
            padding-right: 0px;
          }
          .Navbar nav ul li {
            padding-bottom: 7px;
          }
        }
        @media (min-width: 1000px) {
          .Navbar {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </header>
  );
}
