/*creo nuovi elementi in JS mettendoli dentro una funzione*/

const robotProductGen = (robotData) => {
  const sectionEl = document.createElement("section");
  const title3El = document.createElement("h3");
  const robotlistEl = document.createElement("div");
  const robotboxEl = document.createElement("div");
  const robotimgEl = document.createElement("img");
  const divtextEl = document.createElement("div");
  const paragraphEl = document.createElement("p");
  const title4El = document.createElement("h4");

  /*stabilisco gli attributi*/
  sectionEl.setAttribute("class", "section");
  title3El.textContent = "recommended 4 you";
  robotlistEl.setAttribute("class", "robot-list");
  robotboxEl.setAttribute("class", "robot-box");
  robotimgEl.src =
    robotData.imageUrl; /*data.imgUrl viene da keyword imageUrl che si trova in ogni elemento dell'array mockData*/
  robotimgEl.alt = robotData.robotName;
  divtextEl.setAttribute("class", "text");
  paragraphEl.textContent = robotData.price + "$";
  title4El.textContent = robotData.robotName;

  /*appendo gli elementi*/
  document.body.append(sectionEl);
  sectionEl.append(robotlistEl);
  robotlistEl.appendChild(robotboxEl);
  robotboxEl.append(robotimgEl, divtextEl);
  divtextEl.append(paragraphEl, title4El);
};

const mockData = [
  {
    id: 1,
    robotName: "Bender",
    price: 445,
    imageUrl: "https://robohash.org/bender",
  },
  {
    id: 2,
    robotName: "Calculon",
    price: 1000,
    imageUrl: "https://robohash.org/calculon",
  },
  {
    id: 3,
    robotName: "RobotBacco",
    price: 30,
    imageUrl: "https://robohash.org/robotBacco",
  },
];

/*mockData.map((robotData) => robotProductGen(robotData));*/

try {
  mockData.map((item) =>
    robotProductGen(item)
  ); /*possibile errore= mamcato funzionamento della generazione card*/
} catch (err) {
  console.error(
    "Che hai combinato? L'errore è il seguente:"
  ); /*gestione dell'errore*/
}
