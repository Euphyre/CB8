//esercizio #1

import "./Hero.css";
import Slider from "../slider/slider";
const Hero = () => {
  //Se non mettiamo l'array dentro la funzione è possibile inserirlo nello scope globale e scrivere anche così:
  // const showHeroElements = (element) => {
  //   return (
  //     <div key={element.id}>
  //       <h3>{element.title}</h3>
  //       <img src={element.img} alt={element.title} />
  //     </div>
  //   );
  // };

  // return (
  //   <div className="hero">
  //     <h2 className="categories">Categories</h2>
  //     {heroElements.map((element) => showHeroElements(element))}
  //   </div>

  const heroElements = [
    {
      id: 1,
      title: "Anime",
      img: "https://pad.mymovies.it/serietv/immagini/169/AttackOnTitan.jpg",
    },
    {
      id: 2,
      title: "Science fiction",
      img: "https://i.etsystatic.com/23402008/r/il/d58671/2996343001/il_fullxfull.2996343001_aomg.jpg",
    },
    {
      id: 3,
      title: "Horror movies",
      img: "https://leganerd.com/wp-content/uploads/2021/10/SCREAM-2022.jpeg",
    },
    {
      id: 4,
      title: "Tv series",
      img: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    },
    {
      id: 5,
      title: "Musical",
      img: "https://pad.mymovies.it/filmclub/2016/12/146/locandinapg1.jpg",
    },
    {
      id: 6,
      title: "Comedies",
      img: "https://m.media-amazon.com/images/I/71G-tY0Q61L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 7,
      title: "Romantic movies",
      img: "https://m.media-amazon.com/images/M/MV5BYjQ1ZWFlZDQtZDhjOS00NjdmLTg1MzEtYjM0MzM0MGIxYTU5XkEyXkFqcGdeQXVyMTEyMDcwNw@@._V1_.jpg",
    },
    {
      id: 8,
      title: "Western",
      img: "https://pad.mymovies.it/filmclub/2011/05/035/locandina.jpg",
    },
    {
      id: 9,
      title: "Documentary",
      img: "https://m.media-amazon.com/images/I/91PBO6JtjDL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 10,
      title: "War",
      img: "https://i.ebayimg.com/images/g/B~EAAOSw6Wld9iAJ/s-l1600.jpg",
    },
  ];

  return (
    <div className="hero">
      <h2 className="categories">Categories</h2>

      <Slider list={heroElements} />
    </div>
  );
};

export default Hero;

/* <div className="imgWrapper">
        {heroElements.map((element) => (
          <div key={element.id}>
            <h3 className="element__title">{element.title}</h3>

            <img className="image" src={element.img} alt={element.title} />
          </div>
        ))}
      </div> */
