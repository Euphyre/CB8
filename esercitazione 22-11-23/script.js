//Esercizio #1:
//effettuare una chiamata al seguente endpoint e richiedere una lista di immagini.
//Fare quindi il console log che presenti i soli valori contenuti dentro la chiave `download_url`.  Attenzione, usare Async/Await.
//Endpoint: `https://picsum.photos/v2/list`

const imageList = async () => {
  //image list viene definita come funzione asincrona
  const response = await fetch(`https://picsum.photos/v2/list`); //fetch recupera i dati dalla API picsum, indirizzo che fornisce una lista di immagini
  const data = await response.json(); //i dati della chiamata fetch vengono convertiti in formato JS con JSON
  data.map((images) => console.log(images.download_url)); //data.map viene usato per iterare ciascun elemento all'interno dell'array "data"
}; //la callback prende un singolo elemento (images) dall'array (data) e stampa l'URL di download di ogni immagine nella console del browser

imageList();

/*Una funzione dichiarata con la parola chiave async restituisce sempre una Promise.
 Quando una funzione è dichiarata come async, può contenere delle operazioni che richiedono tempo senza bloccare l'esecuzione del resto del codice.
  Await attende che la Promise si risolva e restituisca il risultato. Ciò rende il codice più leggibile e facile da gestire,
   eliminando la necessità di lavorare direttamente con le Promise o concatenare molte chiamate di callback.*/

//Esercizio #2:
/* Creare una funzione che renderizzi una immagine e un testo. Una volta creata la funzione, renderizzare i dati del seguente oggetto:
L'immagine deve essere renderizzata nella pagina. */

//definiamo l'oggetto che contiene le informazioni sull'immagine:
const photographer = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

//si crea una funzione che prende un oggetto come argomento, creiamo gli elementi,
//si impostano gli attributi usando l'URL e l'author dell'oggetto definito prima:
const imageCreator = (obj) => {
  const wrapperEl = document.createElement("div");
  const image = document.createElement("img");
  const text = document.createElement("h1");

  image.src = obj.download_url;
  text.textContent = obj.author;

  wrapperEl.append(image, text); //appendiamo l'immagine e il testo e ritorniamo il Div (wrapperEl)

  return wrapperEl;
};

document.body.appendChild(imageCreator(photographer));
//inseriamo l'elemento creato dalla funzione nel body del documento HTML con l'oggetto object, in modo che siano visibili.
