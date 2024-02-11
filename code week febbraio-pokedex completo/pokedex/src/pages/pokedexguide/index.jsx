import styles from "./pokeguide.module.scss";
import Image from "next/image";

export default function Pokeguide() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <img
          className={styles.image}
          src="/audio/snorlax.gif"
          width="200px"
          height="200px"
        ></img>
        <h1 className={styles.title}> Welcome on the Pokedex guide!</h1>
      </div>
      <h2 className={styles.title1}>Search your Pokémon</h2>
      <p className={styles.text}>
        Hi Pokémon Trainer! Here's a simple guide to use your Pokedex: use the{" "}
        <a href="/" className={styles.link}>
          Homepage
        </a>
        to navigate to the main screen of the application.<br></br> Click on{" "}
        <a href="/pokedex" className={styles.link}>
          "Pokedex"
        </a>{" "}
        to open the section about Pokémon. Type the name of the pokémon you want
        to know information about in the search bar and you'll find its card.{" "}
        <br></br>
        <h2 className={styles.title1}>1st generation Pokémon starter</h2>
        <p>
          Click on{" "}
          <a href="/starters" className={styles.link}>
            Starters
          </a>{" "}
          and choose your favourite Pokémon.
        </p>
        <br></br>Enjoy and Gotta catch 'em all!
      </p>
      <Image
        className={styles.image}
        src="https://i.pinimg.com/originals/e9/38/d1/e938d18fc07a3ffd16b4864ef2f1308f.gif" //dominio immagine in next config
        alt="pokemon"
        width="300"
        height="300"
      />
    </div>
  );
}
