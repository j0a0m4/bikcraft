import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";

export default function esporte() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Navbar />
      <Layout>
        <ProductGrid title={pid} />
        <Footer />
      </Layout>
    </>
  );
}
