import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <nav>
        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>

          <li>
            <Link href="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link href="/pokedexGuide">How to use pokedex </Link>{" "}
            {/* si invoca il nome della cartella, mentre in questa deve essere sempre presente un file index, altrimenti non si vede nulla*/}
          </li>
        </ul>
      </nav>
      <div>{children}</div>

      <footer>
        <p>© 2024 fakePokedex </p>
      </footer>
    </div>
  );
};

export default MainLayout;
