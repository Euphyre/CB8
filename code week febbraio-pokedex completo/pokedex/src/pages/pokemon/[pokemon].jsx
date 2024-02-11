import styles from "@/pages/pokemon/pokemon.module.scss";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonSearch, setPokemonSearch] = useState("");

  //chiamata all'endpoint che sfrutta la pagina dinamica in base a quello che scrive l'utente (router.query)
  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${router.query.pokemon || "ditto"}`
    ) // è un esempio di template literal. L'espressione all'interno delle parentesi graffe viene valutata e il risultato viene incorporato nella stringa.
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [router.query.pokemon]);

  //funzione per la ricerca del pokémon
  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(pokemonSearch.toLowerCase());
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <div className={styles.body}>
      <div className={styles.search}>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          {" "}
          {/*si inserisce la barra di ricerca come form in cui il value della ricerca corrisponde al nome del pokemon scritto dall'utente*/}
          <input
            className={styles.inputPokemon}
            value={pokemonSearch}
            onChange={onHandleChange}
            type="text"
            required
            placeholder="Search a Pokémon"
          />
          <input className={styles.btnPokemon} type="submit" value="Go!" />
        </form>
      </div>

      {/*sprites si riferisce all'immagine, se è presente allora viene generato il div con tutto quello che c'è dentro*/}
      {pokemonData.sprites ? (
        <div className={styles.Pokedex}>
          <img
            className={styles.image}
            src={pokemonData.sprites.other.showdown.front_default}
            alt=""
          />

          <h1 className={styles.title}>{pokemonData.name.toUpperCase()}</h1>

          <div className={styles.type}>
            {pokemonData.types.map((type, i) => (
              <p key={i}>{type.type.name}</p>
            ))}
          </div>

          <div className={styles.info}>
            <p>Weight: {pokemonData.weight}</p>
            <p>Height: {pokemonData.height}</p>
          </div>

          <ul className={styles.stats}>
            {pokemonData.stats.map((stat, i) => (
              <li className={styles.stat} key={i}>
                <p>{stat.base_stat}</p>
                <p>{stat.stat.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /*altrimenti (:) appare il messaggio "nome del pokémon + non trovato"*/
        <p className={styles.notFound}>{router.query.pokemon + " not found"}</p>
      )}
    </div>
  );
}
