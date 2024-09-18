/* eslint-disable */


import ABESIT from "@/components/Abesit";
import About from "@/components/About";
import Glimpse from "@/components/Glimpse";
import Hero from "@/components/Hero";
import PastYearFacts from "@/components/PastFacts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Festin-O-beats</title>
        <meta name="description" content="Unleash the rhythm, ignite the spirit—Festin-O-Beats, where the beat never stops!" />
      </Head>
      <main>
        <Hero />
        <ABESIT/>
        <About/>
        <Glimpse/>
        <PastYearFacts/>
      </main>
    </>

  );
}
