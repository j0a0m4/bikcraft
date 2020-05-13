import React from "react";

export default function Navbar() {
  return (
    <header id="Navbar">
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
        #Navbar {
          background-color: var(--yellow);
          padding: 10px 10px 10px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-heigth: 80px;
          min-width: 50px;
          width: 100%;
        }

        #Navbar nav ul {
          margin-right: 30px;
          display: flex;
        }

        #Navbar nav ul li {
          padding-right: 20px;
        }

        #Navbar nav ul li a {
          text-transform: uppercase;
          color: black;
          font-weight: bold;
          text-decoration: none;
          transition: 0.5s;
        }

        #Navbar nav ul li a:hover {
          color: white;
          transition: 0.3s;
        }
      `}</style>
    </header>
  );
}
