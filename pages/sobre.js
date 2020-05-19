import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ArticleText from "../components/ArticleText";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Bikcraft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Layout>
        <Hero
          image="esporte-2"
          position="right bottom"
          title="sobre"
          size="180px"
        >
          <p>conheça mais sobre a bikcraft</p>
        </Hero>
        <section className="content">
          <ArticleText id="missao" title="História, Missão e Visão">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              beatae officiis quasi ad! Quae saepe officia amet, quidem
              consequuntur ipsa hic cumque numquam illum fuga blanditiis
              deserunt libero odio ratione?
            </p>
          </ArticleText>
          <ArticleText id="valores" title="Valores">
            <ul>
              <li>Qualidade no processo com foco no cliente</li>
              <li> Compromisso sem perder a diversão</li>
              <li>Pensar a natureza com sustentabilidade</li>
            </ul>
          </ArticleText>
          <img
            src="./assets/fotos/passeio-3.jpg"
            alt="Bicicletas paradas na rua"
          />
        </section>
        <Footer />
      </Layout>
      <style jsx scoped>{`
        .content {
          display: grid;
          padding: 60px;
          row-gap: 100px;
          column-gap: 100px;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "missao valores"
            "imagem imagem";
        }
        .content img {
          grid-area: imagem;
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}
