import {Inter} from "next/dist/compiled/@next/font/dist/google";
import styles from "../styles/Home.module.css"
import Head from "next/head";
import {Heading} from "@/components/Heading";
import {Hero} from "@/components/Hero";
import {HowIt} from "@/components/HowIt";
import {Services} from "@/components/Services";
import {Contacts} from "@/components/Contacts";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Стоматология Sekvoya Stom</title>
        <meta name="description" content="Первая комплексная поликлиника города Хэйхэ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading/>
      <Hero/>
      <HowIt/>
      <Services/>
      <Contacts/>
      <Footer/>
    </div>
  );
}