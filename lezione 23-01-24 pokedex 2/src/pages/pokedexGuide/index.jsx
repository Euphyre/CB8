import styles from "./pokeguide.module.scss";

export default function Pokeguide() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <img
          className={styles.image}
          src="https://i.gifer.com/origin/29/29295eca5de02864e5144193375a6095_w200.gif"
          width="200px"
          height="200px"
        ></img>
        <h1 className={styles.title}> Welcome on the Pokedex guide!</h1>
      </div>
      <h2 className={styles.title1}>Search your Pokémon</h2>
      <p className={styles.text}>
        Hi Pokémon Trainer! Here's a simple guide to use your Pokedex: use the{" "}
        <a href="/" className={styles.link}>
          {" "}
          homepage
        </a>{" "}
        to navigate to the main screen of the application. Click on{" "}
        <a href="/pokedex" className={styles.link}>
          "Pokedex"
        </a>{" "}
        to open the section about Pokémon. Type the name of the pokémon you want
        to know information about in the search bar and you'll find its card.{" "}
        <br></br>Enjoy and Gotta catch 'em all!
      </p>
    </div>
  );
}
