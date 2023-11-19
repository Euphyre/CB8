/*esercizio 1 e 3 avanzato*/
/*creo, assegno e appendo i vari elementi*/
const popupEl = () => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("p");
  const btnEl = document.createElement("button");
  const btnEl2 = document.createElement("button2");

  wrapperEl.className = "pop-up";
  textEl.textContent =
    "Benevenuto sul pianeta del Piccolo principe! Bisogna essere grandi per capire a fondo le storie più belle...Hai almeno 18 anni?";
  btnEl.className = "popup-button";
  btnEl2.className = "popup-button2";
  btnEl.textContent = "Si";
  btnEl2.textContent = "No";

  wrapperEl.append(textEl, btnEl, btnEl2);
  return wrapperEl;
};

/*dato che fuori dallo scope di setTimeout  non esistono i bottoni e il popup, devo ricreare delle costanti con nuovi nomi e assegnargli le caratteritiche preesistenti*/
setTimeout(() => {
  const overlay =
    document.querySelector(
      ".overlay"
    ); /*richiamo l'overlay da CSS dentro lo scope di setTimeout*/
  const popup = popupEl();
  document.body.append(popup);
  const buttonYes = document.querySelector(".popup-button");
  const buttonNo = document.querySelector(".popup-button2");
  /*assegno a ciascun bottone cosa dovrà fare*/
  buttonYes.addEventListener("click", () => {
    popup.remove();
    overlay.style.display = "none"; /*faccio scomparire l'overlay*/
  });
  buttonNo.addEventListener("click", () => {
    window.open("https://www.google.it", "_blank");
  });
}, 3500);
