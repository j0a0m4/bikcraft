import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikcraft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar />
      </Layout>
    </>
  );
}
