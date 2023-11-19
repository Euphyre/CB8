/*esercizio 2
/*creo una funzione con la card del prodotto
const productGen = (data) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h3");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");

  wrapperEl.className = "product";
  titleEl.textContent = data.title;
  imgEl.src = data.thumbnail;
  imgEl.alt = data.title;
  textEl.className = "text";
  priceEl.textContent = data.price + "$";
  textEl.append(titleEl, priceEl);
  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};*/

/*con la fetch vado a prendere gli elementi del server, uso il then per decifrare più volte la risposta promise
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data.products));
scrivo data.products per avere l'array di ogni singolo oggetto*/

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(
    (data) =>
      console.log(
        data.products.filter((prod) => prod.price < 50)
      ) /*al posto di console log va data.products.filter((prod) => prod.price <= 50));*/
  );
