import styles from "./pokemonstarters.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Pokemonstartes({ pokemonData }) {
  //inseriamo la prop nella funzione

  const [pokemon, setPokemon] = useState({});
  const { types, sprites, name } = pokemon;

  //funzione per ritornare il colore dello sfondo in base al tipo di pokemon
  const pokemonColor = (type) => {
    switch (type) {
      case "water":
        return "#5a8cce";
      case "fire":
        return "#e00000";
      case "grass":
        return " #85e27c";
    }
  };

  useEffect(() => {
    fetch(pokemonData.url)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);
  return (
    //se l'immagine (sprites) esiste allora ritorna un contenitore con il colore del tipo e il nome del pokemon
    pokemon.sprites && (
      <Link className={styles.link} href={`pokemon/${name}`}>
        {" "}
        {/*si mette un link di collegamento al dettaglio del pokemon in base al suo nome*/}
        <div
          className={styles.card}
          style={{
            backgroundColor: pokemonColor(types[0].type.name),

            cursor: "pointer",
          }}
        >
          <h3 className={styles.name}>{name}</h3>
          <img
            className={styles.image}
            src={sprites.other.dream_world.front_default}
            alt=""
          />
        </div>
      </Link>
    )
  );
}
