/*creo nuovi elementi in JS*/
const heroImg = document.createElement("div");
const heroText = document.createElement("div");
const titleEl = document.createElement("h1");
const descriptionEl = document.createElement("p");
const btnEl = document.createElement("button");

/*stabilisco gli attributi inserendo classe e nome che ho usato in CSS*/
heroImg.setAttribute("class", "hero-image");
heroText.setAttribute("class", "hero-text");
titleEl.textContent =
  "Ciao questa è la pagina dell'esercitazione del 10-11-2023";
descriptionEl.textContent = "Che angoscia";
btnEl.textContent = "Clicca qui per fare esplodere il tuo computer";

/*appendo gli elementi con appendChild per farli comparire*/

/*appendo la sezione hero (il contenitore) al body e il testo al suo contenitore(l'immagine)*/
document.body.appendChild(heroImg);
heroImg.appendChild(
  heroText
); /*appendo la formattazione del testo CSS alla hero*/
/*appendo il titolo, la descrizione e il bottone al contenitore heroText*/
heroText.appendChild(titleEl);
heroText.appendChild(descriptionEl);
heroText.appendChild(btnEl);

/*esercizio 2- utilizzo addEventListener per aggiungere il link che avevo scelto in HTML e per nascondere la sezione*/
document.querySelector(".button");
btnEl.addEventListener("click", function () {
  window.open(
    "https://tenor.com/it/view/star-trek-star-trek-tos-sulu-explode-computer-gif-18131061"
  );
  heroImg.setAttribute("class", "hidesection");
  heroText.setAttribute("class", "hidesection");
});
