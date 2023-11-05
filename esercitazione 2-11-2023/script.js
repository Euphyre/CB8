/*esercizio 1*/
function temperature(termometer) {
  if (termometer >= 0 && termometer <= 14) {
    return "Freddo";
  } else if (termometer >= 15 && termometer <= 24) {
    return "Mite";
  } else if (termometer >= 25 && termometer <= 50) {
    return "caldo";
  } else {
    return "Non so che termometro stai usando";
  }
}

console.log(temperature(7));
console.log(temperature(50));
console.log(temperature(20));
console.log(temperature(100));

/*esercizio 2*/
const person = {
  age: 28,
  name: "Eugenia",
  surname: "Renda",
  eyecolor: "green",
  job: "middle-school teacher",
  selfdescription: function () {
    return (
      "Hello, I'm " +
      person.name +
      " " +
      person.surname +
      " " +
      "I'm" +
      " " +
      person.age +
      ". My eyes are" +
      " " +
      person.eyecolor +
      " and I'm a " +
      person.job +
      "."
    );
  },
};

const me = person.selfdescription();
console.log(me);

/*oppure puoi fare*/
const person = {
  age: 28,
  name: "Eugenia",
  surname: "Renda",
  eyecolor: "green",
  job: "middle-school teacher",
  interests: function () {
    return "I love playing piano, playing video-games and sewing clothes.";
  },
};

console.log(
  "My name is",
  person.name,
  person.surname,
  "my eyes are",
  person.eyecolor,
  "I work as a",
  person.job,
  "In my free time",
  person.interests()
);

/*esercizio 3*/
/*1*/
const favourites = [];

/*2*/
function addFavourites(filmname) {
  favourites.push(filmname);
}

addFavourites("Mulan");
addFavourites("Howl's Moving Castle");
addFavourites("Your Name");
addFavourites("The Girl who leapt trough the time");

/*3*/
function showFavourites() {
  console.log(favourites);
}

showFavourites();

/*4 Scrivere una funzione rimuoviDaPreferiti che prende una stringa come parametro e rimuove quell'elemento dall'array preferiti, se esiste.*/
function removeFromfavourites(filmname) {}

/*come si continua usando splice?????*/
