
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Festin-O-beats</title>
        <meta name="description" content="Unleash the rhythm, ignite the spirit—Festin-O-Beats, where the beat never stops!" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Hero />
       
      
      </main>
    </>

  );
}
