import Link from "next/link";
import styles from "@/pages/navbar/navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.nav_wrapper}>
      <nav className={styles.list_wrapper}>
        <ul>
          <li>
            <Link className={styles.name1} href="/">
              Homepage
            </Link>
          </li>

          <li>
            <Link className={styles.name2} href="/pokemon/pikachu">
              Pokedex
            </Link>
          </li>
          <li>
            <Link className={styles.name4} href="/starters">
              Starters
            </Link>
          </li>
          <li>
            <Link className={styles.name3} href="/pokedexguide">
              How to use pokedex{" "}
            </Link>{" "}
            {/* si invoca il nome della cartella, mentre in questa deve essere sempre presente un file index, altrimenti non si vede nulla*/}
          </li>
        </ul>
      </nav>
    </div>
  );
}
