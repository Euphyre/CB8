import styles from "./starters.module.scss";
import { useState, useEffect } from "react";
import Pokemonstartes from "../pokemonstartes/index";

//creo un componente che mi reitera le card con dentro i pokemon

export default function Starters() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=9")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results)),
      [];
  });

  return (
    <div className={styles.wrapper}>
      {pokemonList.map((pokemon) => (
        <Pokemonstartes pokemonData={pokemon} key={pokemon.url} /> //sto importando il componente che avrà le caratteristiche dei pokemon
      ))}
    </div>
  );
}
