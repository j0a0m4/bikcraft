import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import BikeGrid from "../components/BikeGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikcraft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar />
        <Hero />
        <BikeGrid />
        <Footer />
      </Layout>
    </>
  );
}
