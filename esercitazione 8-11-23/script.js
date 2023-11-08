/*Esercizio 1*/
const sum = (first, second, third) => first + second + third;

const sub = (first, second, third) => first - second - third;

const mult = (first, second, third) => first * second * third;

const div = (first, second, third) => first / second / third;

function calculator(fn) {
  return fn;
}

console.log(calculator(sum(2, 4, 8)));
console.log(calculator(sub(17, 9, 3)));
console.log(calculator(mult(8, 8, 8)));
console.log(calculator(div(4, 2, 1)));

console.log(calculator(div(4, 2, 0))); che vuol dire infinity??*/

/*Esercizio 2*/
let cart = [
  {
    id: "12345",
    name: "Jeans levi's",
    description: "Jeans mom fit in denim",
    link: "https//:levis.it/abbigliamento/jeans/jeansmomfit/400X500",
  },
  {
    id: "23456",
    name: "Salopette levi's",
    description: "Salopette regular fit in velluto",
    link: "https//:levis.it/abbigliamento/salopette/salopetteregular/400X500",
  },
  {
    id: "34567",
    name: "Gonna in denim 505",
    description: "Mini gonna in denim con dettagli ricamati",
    link: "https//:levis.it/abbigliamento/gonne/gonnadenim/400X500",
  },
];

/*forEach() restituisce un valore undefined, altrimenti, tramite la funzione callback restituisce tutto quello che è inserito nella callback*/
cart.forEach((item) => {
  console.log(item.name + " " + item.description); /*funzione callback*/
});

/*Map restituisce un nuovo array di dimensioni uguali a quello di ingresso e in più esegue la funzione callback*/

const MapResult = cart.map((item) => item);
console.log(MapResult);

