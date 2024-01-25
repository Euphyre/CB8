import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Homepage.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Homepage}>
        <h1>Pokemon Page!</h1>
        <Image
          src="https://64.media.tumblr.com/326f907a6fd9bf251779cd0fdbb27bb7/tumblr_mrjd9jshOz1s4m43ho1_500.gif" //dominio immagine in next config
          alt="pokemon"
          width="1000"
          height="600"
        />
      </div>
    </>
  );
}