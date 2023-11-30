/* Scrivere in Javascript (quindi dinamico) tutta la sezione HTML relativa alla Navbar (mobile), lasciando come elemento iniziale HTML il tag `<nav class="navbar">`.
Cosi come abbiamo fatto con la sezione main `<main class="main">` oggi a lezione.
 */

const navbarGenerator = () => {
  const navSection = document.createElement("div");
  const WrappersearchEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const inputEl = document.createElement("input");

  const WrapperNavmenuEl = document.createElement("div");
  const ulList = document.createElement("ul");
  const listName1 = document.createElement("li");
  const listName2 = document.createElement("li");
  const label = document.createElement("label");
  const select = document.createElement("select");
  const option = document.createElement("option");

  WrappersearchEl.className = "search";
  imgEl.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  imgEl.alt = "netflix-clone-logo";
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("placeholder", "Search");
  WrapperNavmenuEl.className = "links";
  ulList.className = "links-list";
  listName1.textContent = "TV Shows";
  listName2.textContent = "Movies";
  label.textContent = "categories";
  label.setAttribute("for", "categories");
  select.setAttribute("name", "categories");
  select.setAttribute("id", "categories");
  option.setAttribute("value", "");

  navSection.append(WrappersearchEl, WrapperNavmenuEl);
  WrappersearchEl.append(imgEl, inputEl);
  WrapperNavmenuEl.append(ulList);
  ulList.append(listName1, listName2, label, select);
  select.append(option);
  return navSection;
};

export { navbarGenerator }; //esporto il file che si trova dentro utils nel file JS script e lo nomino anche nell'HTML principale.

/* const navigationbar = document.querySelector(".navbar");
navigationbar.append(navbarGenerator());  per verificare se funziona prima di esportare*/
