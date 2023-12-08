// fetch("https://jsonplaceholder.typicode.com/users") //chiamata all'endpoint fornito
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data); // Stampa i dati nella console del browser e mostra i dieci contatti (solo in console)
//   });

//scope globale dell'array
let users = [];

///////GENERAZIONE DELLA CARD CON I SUOI ELEMENTI///////
const cardSection = document.querySelector(".cardSection"); //seleziono il contenitore cardSection dell'HTML

const cardGenerator = (user) => {
  const card = document.createElement("div"); //si crea l'elemento contenitore card dell'utente con gli elementi che lo compongono
  const name = document.createElement("h2");
  const username = document.createElement("p");
  const email = document.createElement("p");
  const phone = document.createElement("P");

  card.setAttribute("class", "cardWrapper"); //si settano le classi di ciascun elemento e si inseriscono le chiavi dell'array come contenuto
  name.setAttribute("class", "cardTitle");
  username.setAttribute("class", "username");
  email.setAttribute("class", "email");
  phone.setAttribute("class", "phone");
  name.textContent = user.name;
  username.innerHTML = "<b>username:</b> " + user.username;
  email.innerHTML = "<b>email:</b> " + user.email;
  phone.innerHTML = "<b>phone:</b> " + user.phone;

  card.appendChild(name); // Appendo gli elementi
  card.appendChild(username);
  card.appendChild(email);
  card.appendChild(phone);

  cardSection.appendChild(card); // Aggiunge l'elemento card alla sezione cardSection

  ////////Creazione del bottone dei preferiti///////////
  const favouriteButton = document.createElement("button");
  favouriteButton.setAttribute("class", "favoriteButton");
  favouriteButton.style.marginTop = "20px"; //inserisco lo stile del bottone qua perchè su CSS non funziona
  favouriteButton.style.backgroundColor = "transparent";
  favouriteButton.style.borderColor = "transparent";

  const image = document.createElement("img");
  image.setAttribute("class", "favouriteImage");
  image.src =
    "https://images.emojiterra.com/google/android-12l/512px/1f49f.png";

  //al click sull'immagine succede:
  image.addEventListener("click", () => {
    const favouritesSection = document.querySelector(".favourites");
    //che se la sezione dei preferiti contiene la card su cui clicchiamo allora questa viene appesa alla sezione delle card
    if (favouritesSection.contains(card)) {
      cardSection.appendChild(card);
    } else {
      favouritesSection.appendChild(card); //altrimenti, se non è contenuta nella sezione dei preferiti, viene spostata in quella
    }
  });

  favouriteButton.appendChild(image);
  card.appendChild(favouriteButton);
  cardSection.appendChild(card);
};

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await response.json();
  document.getElementById("userCards"); //si richiama l'id userCard con il metodo grtElementById

  //////USERS CARDS/////
  // si itera su ciascun elemento nell'array users e si esegue cardGenerator(user) senza generare un nuovo array.
  users.forEach((user) => {
    cardGenerator(user);
  });
};

// Chiamata alla funzione per ottenere e visualizzare gli utenti
fetchUsers();

//////SEARCHBAR///////
//selezioniamo la barra di ricerca con getElement
const searchInput = document.getElementById("searchInput");

//si aggiunge un addEventListener alla digitazione del testo
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase(); //stringa usata per il case-insensitive: la ricerca non cambia se scriviamo in caps lock
  //searchText è quello che scriverà l'utente

  //filter ritorna un array filtrato in base al searchText
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText) || // OR funziona se almeno uno dei valori è vero
      user.username.toLowerCase().includes(searchText.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
  );
  cardSection.textContent = "";
  if (filteredUsers.length === 0) {
    const message = document.createElement("p");
    message.setAttribute("class", "errorMessage");
    message.textContent = "No users found 😣";
    cardSection.appendChild(message);
  } else {
    filteredUsers.map((user) => cardGenerator(user));
  }
});
