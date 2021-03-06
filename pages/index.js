import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import BikeGrid from "../components/BikeGrid";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import SlideshowGrid from "../components/SlideshowGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Bikcraft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Layout>
        <Hero
          image="mesa-trabalho"
          title="Bicicletas Feitas a Mão "
          action="Orçamento"
          margin
        >
          <Quote
            phrase="Não tenha nada em sua casa que você não considere útil ou acredita ser bonito!"
            author="William Morris"
          />
        </Hero>
        <BikeGrid />
        <SlideshowGrid
          title="Portfolio"
          action="Portfolio"
          images={["retro-1", "esporte-1", "passeio-2"]}
        />
        <Hero image="passeio-1">
          <Quote
            phrase="O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana"
            author="William Morris"
          />
        </Hero>
        <Footer />
      </Layout>
    </>
  );
}
