import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import BikeGrid from "../components/BikeGrid";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikcraft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar />
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
        <Hero image="passeio-1">
          <Quote
            phrase="O verdadeiro sogredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana"
            author="William Morris"
          />
        </Hero>
        <Footer />
      </Layout>
    </>
  );
}
