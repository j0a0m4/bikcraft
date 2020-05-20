import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

export default function produtos() {
  return (
    <>
      <Head>
        <title>Produtos - Bikcraft</title>
      </Head>
      <Navbar />
      <Layout>
        <Hero
          image="esporte-1"
          position="right center"
          title="produtos"
          size="180px"
        >
          <p>conheça todos os nossos produtos</p>
        </Hero>
        <ProductGrid title="passeio" />
        <ProductGrid title="esporte" />
        <ProductGrid title="retro" />
        <Footer />
      </Layout>
    </>
  );
}
