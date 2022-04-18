import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>VPN Best Landingpage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
