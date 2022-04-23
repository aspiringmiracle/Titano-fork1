import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Estimate from "../components/Estimate";
import Token from "../components/token"
import Play from '../components/Play'
import Layout from "../components/Layout/Layout";
import External_link from '../components/external_link'
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
        <Play/>
        <Estimate/>
        <Token/>
        <External_link></External_link>
      </Layout>
    </>
  );
}
